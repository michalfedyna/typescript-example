<template>
  <div ref="embedRef" id="embed" class="h-screen" />
</template>

<script setup lang="ts">
import sdk from "@stackblitz/sdk";

const embedRef = ref<HTMLElement | null>(null);

onMounted(() => {
  sdk.embedProject(
    "embed",
    {
      title: "Node Starter",
      description: "A basic Node.js project",
      template: "node",
      files: {
        "index.ts": `console.log('Hello World!');`,
        "package.json": `{
        "name": "my-project",
        "scripts": { "start": "ts-node index.ts"},
        "dependencies": { "typescript": "5.3.3", "ts-node": "10.9.2", "nodemon": "3.1.0" },
        "stackblitz": { "installDependencies": true, "startCommand": "npm start" }
      }`,
      },
    },
    {
      view: "editor",
      clickToLoad: true,
      openFile: "index.js",
      terminalHeight: 50,
      hideExplorer: false,
      hideNavigation: true,
      showSidebar: false,
      hideDevTools: true,
    },
  );
});
</script>
