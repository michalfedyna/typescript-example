<template>
  <main class="flex flex-1">
    <ContentRenderer :value="$props.content ?? undefined">
      <template #default>
        <div class="mx-auto flex max-w-full flex-col-reverse lg:mx-0 lg:flex-1 lg:flex-row">
          <div class="hidden flex-1 flex-col items-end lg:sticky lg:top-0 lg:flex lg:self-start">
            <slot name="navigation" />
          </div>
          <article class="prose p-6 lg:prose-lg lg:w-[70ch] lg:min-w-0 lg:max-w-[70ch]">
            <slot name="default" />
          </article>
          <div class="flex flex-1 flex-col lg:sticky lg:top-0 lg:items-start lg:self-start">
            <slot name="toc" />
          </div>
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
  content: Object | null | undefined;
};

defineProps<Props>();
</script>
