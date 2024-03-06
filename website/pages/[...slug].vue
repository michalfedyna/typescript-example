<script setup lang="ts">
import type { TOC } from "~/components/ContentTable.vue";
import usePrevNext from "~/composable/usePrevNext";
import useBreadcrumbs from "~/composable/useBreadcrumbs";
import useTOC from "~/composable/useTOC";
import useNavTree from "~/composable/useNavTree";

const route = useRoute();

const { data: content } = await useAsyncData(route.path, () => queryContent(route.path).findOne());

const prevNext = await usePrevNext();
const navTree = await useNavTree("/");
const breadcrumbs = useBreadcrumbs();
const TOC = useTOC(content.value);

onMounted(() => {});
</script>

<template>
  <ContentLayout :content="content">
    <template #navigation>
      <NavigationTree :tree="navTree" />
    </template>
    <template #default>
      <NavigationBreadcrumb class="not-prose mb-6" :breadcrumbs="breadcrumbs" />
      <ContentRendererMarkdown :value="content ?? {}" />
      <NavigateButtons class="not-prose" :prev="prevNext.prev" :next="prevNext.next" />
    </template>
    <template #toc>
      <ContentTable :toc="TOC" />
    </template>
    <template #empty>
      <div class="not-prose flex flex-1 flex-col items-center justify-center">
        <span class="text-8xl text-typescript">404</span>
        <span class="text-4xl text-gray-400">Page not found</span>
      </div>
    </template>
  </ContentLayout>
</template>
