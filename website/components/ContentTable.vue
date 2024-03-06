<!--TODO: Create recursive component-->
<template>
  <div class="">
    <div class="mt-4 flex flex-col items-start text-nowrap border-l-2 border-gray-200 py-6 pl-6" v-if="toc.length">
      <span class="mb-4 font-medium">On this page</span>
      <ContentAccordion :toc="toc" />
      <div class="mt-6 flex flex-col gap-2">
        <!--TODO: Update destinations-->
        <NuxtLink
          class="text-sm text-gray-400 hover:text-typescript"
          target="_blank"
          to="https://github.com/michalfedyna/typescript-example"
        >
          <Icon name="material-symbols:star-outline" size="1.5em" />
          Star this project
        </NuxtLink>
        <NuxtLink
          class="text-sm text-gray-400 hover:text-typescript"
          target="_blank"
          to="https://github.com/michalfedyna/typescript-example/issues/new"
        >
          <Icon name="octicon:issue-opened-24" size="1.5em" />
          Open an issue
        </NuxtLink>
        <NuxtLink
          class="text-sm text-gray-400 hover:text-typescript"
          target="_blank"
          to="https://github.com/michalfedyna/typescript-example"
        >
          <Icon name="material-symbols:code" size="1.5em" />
          View source
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export type TOC = { path: string; title: string; children?: TOC[] };

type Props = {
  toc: TOC[];
};
defineProps<Props>();
</script>
