<script setup lang="ts">
type NavigationItem = {
  title: string;
  _path: string;
  description?: string;
} | null;

type Props = {
  items: NavigationItem[];
};

const props = defineProps<Props>();

const items = computed(() => {
  return {
    prev: props.items[0],
    next: props.items[1],
  };
});
</script>

<template>
  <div class="flex justify-between gap-6 pt-6">
    <NuxtLink
      class="flex flex-1 items-center rounded-md border-2 border-solid border-gray-400 px-3 py-3 hover:border-typescript hover:text-typescript md:px-6 md:py-4 lg:text-xl"
      v-if="items.prev"
      :to="items.prev._path"
    >
      <Icon class="md:mr-2" name="material-symbols:arrow-back-ios-rounded" size="1.5em" />
      <h3>{{ items.prev.title }}</h3>
    </NuxtLink>
    <NuxtLink
      class="flex flex-1 items-center justify-end rounded-md border-2 border-solid border-gray-400 px-3 py-3 hover:border-typescript hover:text-typescript md:px-6 md:py-4 lg:text-xl"
      v-if="items.next"
      :to="items.next._path"
    >
      <h3>{{ items.next.title }}</h3>
      <Icon class="md:ml-2" name="material-symbols:arrow-forward-ios-rounded" size="1.5em" />
    </NuxtLink>
  </div>
</template>
