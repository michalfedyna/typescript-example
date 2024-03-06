<template>
  <NuxtLink
    :class="`mx-1 px-2 py-1 text-lg font-light lg:px-4 lg:py-2 lg:text-xl ${$props.callToAction ? 'rounded-md bg-typescript text-gray-100 shadow-sm hover:opacity-90' : 'decoration-typescript decoration-2 hover:underline'}`"
    :to="$props.to"
  >
    <slot></slot>
  </NuxtLink>
</template>

<script setup lang="ts">
type Props = {
  to: string;
  callToAction?: boolean;
};

defineProps<Props>();
</script>
