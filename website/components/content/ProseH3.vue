<template>
  <h3 :id="id">
    <a class="group no-underline hover:underline hover:decoration-typescript" v-if="id && generate" :href="`#${id}`">
      <slot />
      <Icon class="ml-2 opacity-20 group-hover:text-typescript group-hover:opacity-100" name="ph:hash" />
    </a>
    <slot v-else />
  </h3>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from "#imports";

const props = defineProps<{ id?: string }>();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(() => props.id && headings?.anchorLinks?.h1);
</script>
