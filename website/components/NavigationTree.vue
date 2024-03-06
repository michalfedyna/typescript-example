<template>
  <div class="border-r-2 border-gray-200 p-6">
    <NavigationAccordion :active-path="$props.activePath" :tree="$props.tree" />
  </div>
</template>

<script setup lang="ts">
export type NavTree = {
  title: string;
  path: string;
  children?: NavTree[];
};

type Props = {
  tree: NavTree[];
  activePath: string;
};

defineProps<Props>();
</script>
