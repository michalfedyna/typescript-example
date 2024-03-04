<template>
  <div class="not-prose relative my-4 rounded-md bg-gray-700 shadow-md">
    <div class="rounded-t-md bg-gray-800 p-2">
      <div class="flex items-center justify-between">
        <Icon v-if="icon" :name="icon" size="1.5em" />
        <a
          class="text-sm text-gray-400 hover:text-gray-200"
          v-if="$props.language === 'typescript'"
          :href="tsPlaygroundLink"
          target="_blank"
        >
          Open in TypeScript Playground
        </a>
      </div>
    </div>
    <pre :class="`${$props.class} p-2`"><slot /></pre>
    <div
      class="copy absolute bottom-0 right-0 p-2 text-gray-400 hover:cursor-pointer"
      @click="copyToClipboard"
    >
      <span :class="`mr-2 text-sm ${isCopyAlertVisible ? 'visible' : 'hidden'}`"
        >Code copied!</span
      >
      <Icon
        class="hover:text-gray-200"
        size="1.5em"
        name="material-symbols:content-copy-outline"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { compressToEncodedURIComponent } from "lz-string";

const props = defineProps({
  code: {
    type: String,
    default: "",
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
});

const tsPlaygroundLink = ref(
  "https://www.typescriptlang.org/play?#code/" +
    compressToEncodedURIComponent(props.code),
);
const icon = computed(() => {
  switch (props.language) {
    case "typescript":
      return "logos:typescript-icon";
    case "javascript":
      return "logos:javascript";
  }
});

const copyToClipboard = computed(() => () => {
  navigator.clipboard.writeText(props.code);
  isCopyAlertVisible.value = true;
  setTimeout(() => {
    isCopyAlertVisible.value = false;
  }, 1500);
});
const isCopyAlertVisible = ref(false);
</script>

<style>
pre code .line {
  display: block;
}
</style>
