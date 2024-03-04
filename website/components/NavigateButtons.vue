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
      class="flex-1 rounded-md border-2 border-solid border-gray-400 px-6 py-4 hover:border-typescript hover:text-typescript"
      v-if="items.prev"
      :to="items.prev._path"
    >
      <div class="flex justify-start text-xl">
        <Icon class="ml-2" name="material-symbols:arrow-back-ios-rounded" size="1.5em" />
        <h3 class="text-xl">{{ items.prev.title }}</h3>
      </div>
    </NuxtLink>
    <NuxtLink
      class="flex-1 rounded-md border-2 border-solid border-gray-400 px-6 py-4 hover:border-typescript hover:text-typescript"
      v-if="items.next"
      :to="items.next._path"
    >
      <div class="flex justify-end text-xl">
        <h3>{{ items.next.title }}</h3>
        <Icon class="ml-2" name="material-symbols:arrow-forward-ios-rounded" size="1.5em" />
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
