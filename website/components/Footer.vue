<template>
  <div class="bg-gray-200 py-6 shadow-sm">
    <footer class="container mx-auto flex flex-col items-center justify-center">
      <div class="pb-4 text-lg">
        <NuxtLink class="hover:text-gray-600" target="_blank" to="https://github.com/michalfedyna/typescript-example">
          <Icon class="mr-2" name="logos:github-icon" />
          <span>Contribute on GitHub</span>
        </NuxtLink>
      </div>
      <div class="text-lg">
        <span>Made by </span>
        <NuxtLink
          class="underline decoration-typescript decoration-2 hover:text-gray-600"
          target="_blank"
          to="https://github.com/michalfedyna"
        >
          Michał Fedyna
        </NuxtLink>
      </div>
      <NuxtLink class="mb-4 mt-1 decoration-typescript decoration-2 hover:text-gray-600" to="mailto:michal@fedyna.dev">
        &lt;michal<span class="text-typescript">@</span>fedyna.dev&gt;
      </NuxtLink>
      <span class="text-md text-gray-600"> Copyright &copy; 2024 </span>
    </footer>
  </div>
</template>
<script setup lang="ts"></script>
