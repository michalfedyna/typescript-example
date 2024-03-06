<template>
  <div class="flex items-center">
    <NuxtLink class="p-1 pl-0 text-gray-500 hover:text-typescript" to="/">
      <Icon name="material-symbols:house-rounded" size="1.5em" />
    </NuxtLink>
    <Icon name="material-symbols:arrow-forward-ios-rounded" />
    <div v-for="(breadcrumb, index) in breadcrumbs" :key="index">
      <Icon v-if="index !== 0" name="material-symbols:arrow-forward-ios-rounded" />
      <NuxtLink class="p-1 text-gray-500 hover:text-typescript" :to="breadcrumb.path">
        {{ breadcrumb.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
export type Breadcrumb = {
  title: string;
  path: string;
};

type Props = {
  breadcrumbs: Breadcrumb[];
};

defineProps<Props>();
</script>
