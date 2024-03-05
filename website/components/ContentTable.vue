<template>
  <div class="mt-4 flex flex-col items-start border-l-2 border-gray-200 px-6 py-10">
    <div class="flex flex-col gap-2">
      <NuxtLink
        v-for="item in $props.toc"
        :to="item.path"
        :class="`${item.level === 1 ? 'ml-6' : ''} underline hover:text-typescript`"
      >
        {{ item.title }}
      </NuxtLink>
    </div>
    <div class="mt-6 flex flex-col gap-2">
      <!--TODO: Update destinations-->
      <NuxtLink class="hover:text-typescript" target="_blank" to="https://github.com/michalfedyna/typescript-example">
        <Icon name="material-symbols:star-outline" size="1.5em" />
        Star this project
      </NuxtLink>
      <NuxtLink class="hover:text-typescript" target="_blank" to="https://github.com/michalfedyna/typescript-example">
        <Icon name="material-symbols:edit-outline" size="1.5em" />
        Edit this page
      </NuxtLink>
      <NuxtLink class="hover:text-typescript" target="_blank" to="https://github.com/michalfedyna/typescript-example">
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
