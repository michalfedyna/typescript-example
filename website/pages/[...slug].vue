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

onMounted(() => {
  console.log(navigationTOC.value);
});
</script>

<template>
  <div class="flex items-start justify-center">
    <ContentTree class="sticky top-0 flex-1 bg-red-500" />
    <ContentRenderer :value="doc || undefined">
      <template #default="{ value }">
        <div class="mx-6 flex-shrink-0">
          <NavigationBreadcrumb class="mb-6" :breadcrumbs="navigationBreadcrumbs" />
          <article class="prose prose-slate lg:prose-lg">
            <ContentRendererMarkdown :value="value" />
          </article>
          <NavigateButtons :items="navigationPrevNext" />
        </div>
      </template>
      <template #empty>
        <div class="not-prose">
          <Alert type="error">The page you are looking for does not exist.</Alert>
        </div>
      </template>
    </ContentRenderer>
    <ContentTable class="sticky top-0 flex-1" :toc="navigationTOC" />
  </div>
</template>
