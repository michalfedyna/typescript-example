<script setup lang="ts">
import { fetchContentNavigation } from "#imports";
import type { NavItem, TocLink } from "@nuxt/content/types";
import type { TOC } from "~/components/ContentTable.vue";

const route = useRoute();

const { data: doc } = await useAsyncData(route.path, () => queryContent(route.path).findOne());
const { data: links } = await useAsyncData("[prev, next]" + route.path, () =>
  queryContent().only(["_path", "description", "title"]).findSurround(route.path),
);
const { data: navigation } = await useAsyncData("navigation", () => fetchContentNavigation());

function printNavigation(items: NavItem[], level = 0) {
  items.forEach((item) => {
    console.log("  ".repeat(level) + item.title);
    if (item.children) printNavigation(item.children, level + 1);
  });
}

const navigationPrevNext = computed(() => {
  return (
    links.value?.map((link) => {
      if (!link) return null;
      return {
        title: link.title,
        _path: link._path,
        description: link.description,
      };
    }) || []
  );
});

const navigationBreadcrumbs = computed(() => {
  return (
    route.path
      .split("/")
      .filter((path) => path)
      .map((part, index, parts) => {
        const _path = "/" + parts.slice(0, index + 1).join("/");
        return {
          title: part.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
          _path,
        };
      }) || []
  );
});

function extractNavigationTOC(toc: TocLink, basePath: string, level: number = 0): TOC[] {
  const newTOC: TOC = { path: basePath + toc.id, title: toc.text, level };
  const newArray = [newTOC];

  if (toc.children)
    for (const item of toc?.children) {
      const returnArray = extractNavigationTOC(item, basePath, level + 1);
      newArray.push(...returnArray);
    }

  return newArray;
}

const navigationTOC = computed(() => {
  if (!doc.value?.body?.toc || !doc.value._path) return [];

  const returnArray: TOC[] = [];

  for (const item of doc.value?.body?.toc?.links) {
    const array = extractNavigationTOC(item, doc.value._path + "#", 0);
    returnArray.push(...array);
  }

  return returnArray;
});

const navigationTree = computed(() => {
  return navigation.value || [];
});

onMounted(() => {
  console.log(navigationTOC.value);
});
</script>

<template>
  <main class="flex flex-1 flex-col items-center justify-center p-4 lg:p-6">
    <div class="flex max-w-full flex-1 flex-col-reverse lg:flex-row">
      <ContentTree class="sticky top-0 hidden flex-1 lg:block" :tree="[]" />
      <ContentRenderer :value="doc || undefined">
        <template #default="{ value }">
          <article class="prose prose-slate mx-6 lg:prose-lg">
            <NavigationBreadcrumb class="not-prose mb-6" :breadcrumbs="navigationBreadcrumbs" />
            <ContentRendererMarkdown :value="value" />
            <NavigateButtons class="not-prose" :items="navigationPrevNext" />
          </article>
        </template>
        <template #empty>
          <div class="not-prose flex flex-col justify-center">
            <Alert type="error">The page you are looking for does not exist.</Alert>
          </div>
        </template>
      </ContentRenderer>
      <ContentTable class="flex-1 self-start lg:sticky lg:top-0" :toc="navigationTOC" />
    </div>
  </main>
</template>
