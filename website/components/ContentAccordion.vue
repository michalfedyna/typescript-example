<template>
  <div class="flex flex-col gap-2">
    <div class="flex flex-col gap-2" v-for="item in $props.toc">
      <NuxtLink :to="item.path" :class="`group text-gray-700 underline hover:decoration-typescript`">
        <Icon class="mr-1 text-gray-400 group-hover:text-typescript" name="ph:hash" />
        <span>
          {{ item.title }}
        </span>
      </NuxtLink>

      <ContentAccordion class="ml-4" v-if="item.children" :toc="item.children" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TOC } from "~/components/ContentTable.vue";

type Props = {
  toc: TOC[];
};

defineProps<Props>();
</script>
