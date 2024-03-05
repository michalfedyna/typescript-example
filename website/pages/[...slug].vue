<script setup lang="ts">
import type { NavItem, TocLink } from "@nuxt/content/types";
import type { TOC } from "~/components/ContentTable.vue";
import type { NavTree } from "~/components/ContentTree.vue";
import usePrevNext from "~/composable/usePrevNext";
import useBreadcrumbs from "~/composable/useBreadcrumbs";
import useTOC from "~/composable/useTOC";

const route = useRoute();

const { data: content } = await useAsyncData(route.path, () => queryContent(route.path).findOne());

const prevNext = await usePrevNext();
const breadcrumbs = useBreadcrumbs();
const TOC = useTOC(content.value);

const { data: navigation } = await useAsyncData("navigation", () => fetchContentNavigation());

function extractNavigationTree(item: NavItem, level = 0): NavTree[] {
  const newItem: NavTree = {
    title: item.title,
    path: item._path,
    level,
  };
  const newArray: NavTree[] = [newItem];

  if (item.children)
    for (const child of item.children) {
      const returnArray = extractNavigationTree(child, level + 1);
      newArray.push(...returnArray);
    }

  return newArray;
}

const navigationTree = computed(() => {
  if (!navigation.value) return [];

  const returnArray: NavTree[] = [];

  for (const item of navigation.value) {
    const array = extractNavigationTree(item);
    returnArray.push(...array);
  }

  return returnArray;
});

onMounted(() => {
  console.log(navigation.value);
  console.log(navigationTree.value);
});
</script>

<template>
  <main class="flex flex-1 flex-col items-center justify-center p-4 lg:p-6">
    <div class="flex max-w-full flex-1 flex-col-reverse lg:flex-row">
      <ContentTree class="flex-1 self-start lg:sticky lg:top-0" :tree="navigationTree" />
      <ContentRenderer :value="content ?? undefined">
        <template #default="{ value }">
          <article class="prose prose-slate mx-6 lg:prose-lg">
            <NavigationBreadcrumb class="not-prose mb-6" :breadcrumbs="breadcrumbs" />
            <ContentRendererMarkdown :value="value" />
            <NavigateButtons class="not-prose" :prev="prevNext.prev" :next="prevNext.next" />
          </article>
        </template>
        <template #empty>
          <div class="not-prose flex flex-col items-center justify-center">
            <span class="text-8xl text-typescript">404</span>
            <span class="text-4xl text-gray-400">Page not found</span>
          </div>
        </template>
      </ContentRenderer>
      <ContentTable class="flex-1 self-start lg:sticky lg:top-0" :toc="TOC" />
    </div>
  </main>
</template>
