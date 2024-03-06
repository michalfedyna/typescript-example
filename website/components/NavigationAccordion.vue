<template>
  <div class="flex flex-col text-nowrap">
    <div class="flex flex-col" v-for="item in $props.tree">
      <NuxtLink class="px-2 py-1 hover:underline hover:decoration-typescript hover:decoration-2" :to="item.path">
        {{ item.title }}
      </NuxtLink>

      <NavigationAccordion class="ml-4" v-if="item.children" :tree="item.children" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NavTree } from "~/components/NavigationTree.vue";

type Props = {
  tree: NavTree[];
};

defineProps<Props>();
</script>
