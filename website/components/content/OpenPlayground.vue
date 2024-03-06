<template>
  <div class="not-prose my-4 text-xl">
    <NuxtLink target="_blank" :to="link">
      <div
        class="flex items-center justify-between gap-2 rounded-md border-2 bg-blue-200 px-6 py-4 text-typescript hover:border-2 hover:border-typescript"
      >
        <Icon name="logos:typescript-icon" size="1.5em" />
        <span>Open in TypeScript Playground</span>
        <Icon name="material-symbols:arrow-forward-ios-rounded" size="1.5em" />
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { compressToEncodedURIComponent } from "lz-string";
import type { VNode } from "vue";

type Slots = {
  default: () => VNode[];
};

const slots = defineSlots<Slots>();

const link = ref(
  "https://www.typescriptlang.org/play?#code/" + compressToEncodedURIComponent(slots.default()[0].props?.code || ""),
);
</script>
