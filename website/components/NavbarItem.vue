<template>
  <NuxtLink
    :class="`mx-2 px-4 py-2  text-2xl font-light ${$props.callToAction ? 'rounded-md bg-typescript text-gray-100 shadow-sm hover:opacity-90' : 'decoration-typescript decoration-2 hover:underline'}`"
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
