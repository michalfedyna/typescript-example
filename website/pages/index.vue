<style></style>

<template>
  <ContentList v-slot="{ list }">
    <div v-for="article in list">
      <h1>
        {{ article.title }}
      </h1>
      <NuxtLink :to="article._path"> Read more </NuxtLink>
    </div>
  </ContentList>
</template>

<script setup lang="ts">
useHead({
  title: "TypeScript Example",
});
</script>
