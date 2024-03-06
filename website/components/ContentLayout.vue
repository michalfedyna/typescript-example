<template>
  <main>
    <ContentRenderer>
      <template #default>
        <div>
          <slot name="navigation" />
        </div>
        <article>
          <slot />
        </article>
        <div>
          <slot name="toc" />
        </div>
      </template>
      <template #empty>
        <slot name="empty" />
      </template>
    </ContentRenderer>
  </main>
</template>

<script setup lang="ts">
type Props = {
  content: Object;
};

defineProps<Props>();
</script>
