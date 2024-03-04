<template>
  <div class="py-6 text-lg shadow-sm">
    <nav class="container m-auto flex items-center justify-between">
      <NuxtLink to="/">
        <div class="flex items-center justify-center text-[2em] leading-[1em]">
          <Icon class="mr-1" name="logos:typescript-icon" />
          <span class="font-extralight">Example</span>
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
