<template>
  <div class="grow min-w-0 truncate">
    <div class="text-ds-bulma text-14-ds truncate">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="text-ds-trunks text-12-ds truncate">
      <slot name="text">{{ text }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  text: string
}
defineProps<Partial<Props>>()
defineSlots<{ text: string; title: string }>()
</script>

<style scoped></style>
