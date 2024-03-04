<style></style>

<template>
  <div class="h-screen w-screen">
    <ClientOnly>
      <div class="w-full h-full mr-auto">
        <ContentList v-slot="{ list }">
          <div v-for="article in list">
            <h1>
              {{ article.title }}
            </h1>
            <NuxtLink :to="article._path"> Read more </NuxtLink>
          </div>
        </ContentList>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts"></script>
