<template>
  <NuxtLink :to="linkToDifficulty[$props.difficulty]">
    <div
      :class="`inline-flex flex-col rounded-md border-2 px-6 py-2 ${colorsBorder[$props.difficulty]} ${colorsText[$props.difficulty]} ${colorsBackground[$props.difficulty]}`"
    >
      <span class="text-sm font-light">Difficulty</span>
      <span class="text-lg font-medium">{{
        $props.difficulty
          .split("-")
          .map((i) => i[0].toUpperCase() + i.slice(1))
          .join(" ")
      }}</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
type Props = {
  difficulty: "warm-up" | "easy" | "medium" | "hard" | "extreme";
};

defineProps<Props>();

const colorsBackground = {
  "warm-up": "bg-cyan-200",
  easy: "bg-green-200",
  medium: "bg-amber-200",
  hard: "bg-red-200",
  extreme: "bg-violet-200",
};

const colorsText = {
  "warm-up": "text-cyan-600",
  easy: "text-green-600",
  medium: "text-amber-600",
  hard: "text-red-600",
  extreme: "text-violet-600",
};

const colorsBorder = {
  "warm-up": "hover:border-cyan-600",
  easy: "hover:border-lime-600",
  medium: "hover:border-amber-600",
  hard: "hover:border-red-600",
  extreme: "hover:border-violet-600",
};

const linkToDifficulty = {
  "warm-up": "/challenges/warm-up",
  easy: "/challenges/easy",
  medium: "challenges/medium",
  hard: "/challenges/hard",
  extreme: "/challenges/extreme",
};
</script>
