<script setup lang="ts">
type NavigationItem = {
  title: string;
  path: string;
  description?: string;
};

type Props = {
  items: NavigationItem[];
};

defineProps<Props>();
</script>

<template>
  <NuxtLink v-for="item in $props.items" :to="item.path">
    <div class="border-2 border-solid border-gray-400 px-6 py-4">
      <h3 class="text-xl">{{ item.title }}</h3>
      <p class="text-gray-600">{{ item.description }}</p>
    </div>
  </NuxtLink>
</template>

<style scoped></style>
