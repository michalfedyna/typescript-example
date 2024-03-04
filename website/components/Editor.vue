<template>
  <div class="h-full bg-black" id="embed" ref="embedRef" />
</template>

<script setup lang="ts">
import sdk from "@stackblitz/sdk";

const props = defineProps<{
  code?: string;
}>();

const embedRef = ref<HTMLElement | null>(null);

onMounted(() => {
  sdk.embedProject(
    "embed",
    {
      title: "Node Starter",
      description: "A basic Node.js project",
      template: "typescript",
      files: {
        "index.ts": props.code || "console.log('Hello, world!')",
        "index.html": "",
      },
      settings: {
        compile: {
          trigger: "save",
          action: "refresh",
        },
      },
    },
    {
      view: "default",
      clickToLoad: true,
      openFile: "index.js",
      terminalHeight: 50,
      hideExplorer: true,
      hideNavigation: true,
      showSidebar: false,
      hideDevTools: false,
      devToolsHeight: 100,
    },
  );
});
</script>
