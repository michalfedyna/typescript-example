<style>
.monaco-editor {
  height: 100vh;
  width: 100vw;
}
</style>

<template>
  <MonacoEditor :options="options" v-model="value" lang="typescript" class="monaco-editor" />
</template>

<script setup lang="ts">
import type * as Monaco from "monaco-editor";

const options = ref<Monaco.editor.IStandaloneEditorConstructionOptions>({
  theme: "vs-dark",
  minimap: { enabled: false },
});
const value = ref("console.log('Hello, World!')");
</script>
