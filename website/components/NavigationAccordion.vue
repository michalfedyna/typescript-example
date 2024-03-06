<template>
  <div class="flex flex-col text-nowrap">
    <div class="flex flex-col" v-for="item in $props.tree">
      <div class="w-full py-1">
        <NuxtLink
          :class="`hover:underline hover:decoration-typescript hover:decoration-2 ${item.path === $props.activePath ? 'underline decoration-typescript decoration-2' : ''}`"
          :to="item.path"
        >
          {{ item.title }}
        </NuxtLink>
      </div>

      <NavigationAccordion class="ml-4" v-if="item.children" :active-path="$props.activePath" :tree="item.children" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NavTree } from "~/components/NavigationTree.vue";

type Props = {
  tree: NavTree[];
  activePath: string;
};

defineProps<Props>();
</script>
