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
  <main class="flex flex-1 flex-col items-center justify-center p-4 lg:p-6">
    <ContentRenderer :value="content ?? undefined">
      <template #default>
        <div class="flex max-w-full flex-1 flex-col-reverse lg:flex-row">
          <NavigationTree class="self-start lg:sticky lg:top-0" :tree="navTree" />
          <article class="prose prose-slate mx-6 lg:prose-lg">
            <NavigationBreadcrumb class="not-prose mb-6" :breadcrumbs="breadcrumbs" />
            <ContentRendererMarkdown :value="content ?? {}" />
            <NavigateButtons class="not-prose" :prev="prevNext.prev" :next="prevNext.next" />
          </article>
          <ContentTable class="self-start lg:sticky lg:top-0" :toc="TOC" />
        </div>
      </template>
      <template #empty>
        <div class="not-prose flex flex-col items-center justify-center">
          <span class="text-8xl text-typescript">404</span>
          <span class="text-4xl text-gray-400">Page not found</span>
        </div>
      </template>
    </ContentRenderer>
  </main>
</template>
