<template>
  <div class="mt-4 flex flex-col items-start text-nowrap border-l-2 border-gray-200 p-6 py-10">
    <div class="flex flex-col gap-2">
      <NuxtLink
        v-for="item in $props.toc"
        :to="item.path"
        :class="`${item.level === 1 ? 'ml-6' : ''} group text-gray-700 underline hover:decoration-typescript`"
      >
        <Icon class="mr-1 text-gray-400 group-hover:text-typescript" name="ph:hash" />
        <span>
          {{ item.title }}
        </span>
      </NuxtLink>
    </div>
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
</template>

<script setup lang="ts">
export type TOC = { path: string; title: string; level: number };

type Props = {
  toc: TOC[];
};
defineProps<Props>();
</script>
