<template>
  <div
    :class="`not-prose flex flex-row items-center rounded-md p-4 shadow-md ${typeClass}`"
  >
    <Icon class="mr-2 flex-shrink-0" :name="iconName" size="1.5em" />
    <ContentSlot :use="$slots.default" />
  </div>
</template>

<script setup lang="ts">
type Props = {
  type?: "info" | "warning" | "error" | "success";
};
const props = defineProps<Props>();

const classes = {
  info: "bg-blue-200 text-blue-800",
  warning: "bg-yellow-200 text-yellow-800",
  error: "bg-red-200 text-red-800",
  success: "bg-green-200 text-green-800",
};

const icons = {
  info: "material-symbols:info",
  warning: "material-symbols:warning",
  error: "material-symbols:error",
  success: "material-symbols:check-circle",
};

const typeClass = computed(() => classes[props.type || "info"]);
const iconName = computed(() => icons[props.type || "info"]);
</script>
