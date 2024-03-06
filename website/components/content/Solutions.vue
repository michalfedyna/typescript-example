<template>
  <div>
    <div
      class="not-prose mb-4 flex cursor-pointer select-none items-center justify-between rounded-md border-2 bg-blue-200 px-6 py-4 text-xl text-typescript hover:border-typescript"
      @click="toggle"
    >
      <span>{{ visible ? "Hide Solution" : "Show Solution" }}</span>
      <Icon :class="visible ? 'rotate-90' : ''" name="material-symbols:arrow-forward-ios-rounded" size="1.5em" />
    </div>
    <div :class="`${visible ? 'block' : 'hidden'}`">
      <ContentSlot :use="$slots.default" />
    </div>
  </div>
</template>

<script setup lang="ts">
const visible = ref(false);

const toggle = () => {
  visible.value = !visible.value;
};
</script>
