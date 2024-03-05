<template>
  <div class="flex flex-col gap-2 text-nowrap border-r-2 border-gray-200 pr-6 pt-6">
    <NuxtLink
      v-for="item in $props.tree"
      :to="item.path"
      :class="`${item.level === 1 ? 'ml-6' : item.level === 2 ? 'ml-12' : ''} hover:underline hover:decoration-typescript hover:decoration-2`"
    >
      {{ item.title }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
export type NavTree = {
  title: string;
  path: string;
  level: number;
};

type Props = {
  tree: NavTree[];
};

defineProps<Props>();
</script>
