<template>
  <div class="p-6 text-lg shadow-sm">
    <nav class="container m-auto flex items-center justify-between">
      <NuxtLink class="group" to="/">
        <div class="flex items-center justify-center text-2xl lg:text-3xl">
          <Icon class="mr-1 group-hover:opacity-90" name="logos:typescript-icon" />
          <span class="font-light decoration-2 group-hover:underline group-hover:decoration-typescript">Example</span>
        </div>
      </NuxtLink>
      <div>
        <NavbarItem to="/tutorials">Tutorials</NavbarItem>
        <NavbarItem to="/examples">Examples</NavbarItem>
        <NavbarItem to="/challenges">Challenges</NavbarItem>
        <NavbarItem to="/cheatsheet" call-to-action>CheatSheet</NavbarItem>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts"></script>
