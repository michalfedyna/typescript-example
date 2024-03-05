<script setup lang="ts">
export type NavigationPrevNext = {
  title: string;
  path: string;
} | null;

type Props = {
  prev: NavigationPrevNext;
  next: NavigationPrevNext;
};

defineProps<Props>();
</script>

<template>
  <div class="flex justify-between gap-6 pt-6">
    <NuxtLink
      class="group flex flex-1 items-center rounded-md border-2 border-solid border-gray-400 px-3 py-3 hover:border-typescript hover:text-typescript md:px-6 md:py-4 lg:text-xl"
      v-if="$props.prev"
      :to="$props.prev.path"
    >
      <Icon class="md:mr-2" name="material-symbols:arrow-back-ios-rounded" size="1.5em" />
      <div class="flex flex-col">
        <span class="text-sm text-gray-400 group-hover:text-typescript">Previous</span>
        <span>{{ $props.prev?.title }}</span>
      </div>
    </NuxtLink>
    <NuxtLink
      class="group flex flex-1 items-center justify-end rounded-md border-2 border-solid border-gray-400 px-3 py-3 hover:border-typescript hover:text-typescript md:px-6 md:py-4 lg:text-xl"
      v-if="$props.next"
      :to="$props.next.path"
    >
      <div class="flex flex-col items-end">
        <span class="text-sm text-gray-400 group-hover:text-typescript">Next</span>
        <span>{{ $props.next?.title }}</span>
      </div>
      <Icon class="md:ml-2" name="material-symbols:arrow-forward-ios-rounded" size="1.5em" />
    </NuxtLink>
  </div>
</template>
