<script setup lang="ts">
import { fetchContentNavigation } from "#imports";
import type { NavItem } from "@nuxt/content/types";
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

onMounted(() => {
  console.log(route.path);
  console.log(doc);
  console.log(navigationBreadcrumbs.value);
  printNavigation(navigation.value || []);
});
</script>

<template>
  <div class="flex items-center justify-center">
    <ContentTree class="bg-red-500" />
    <ContentRenderer :value="doc || undefined">
      <template #default="{ value }">
        <div>
          <NavigationBreadcrumb class="mb-6" :breadcrumbs="navigationBreadcrumbs" />
          <article class="prose lg:prose-lg prose-slate">
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
    <ContentTable class="bg-red-500" />
  </div>
</template>
