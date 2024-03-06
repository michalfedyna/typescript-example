<style></style>

<template>
  <main class="lg-p6 container mx-auto flex-1 p-4">
    <ContentList v-slot="{ list }">
      <div v-for="article in list">
        <h1>
          {{ article.title }}
        </h1>
        <NuxtLink :to="article._path"> Read more </NuxtLink>
      </div>
    </ContentList>
  </main>
</template>

<script setup lang="ts"></script>
