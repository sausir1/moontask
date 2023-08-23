<template>
  <section class="bg-ds-gohan rounded-ds-i-sm">
    <h3 class="flex p-2 gap-2">
      <slot name="leading"></slot>
      <div
        class="grow text-ds-bulma font-semibold"
        @click="expanded = !expanded"
      >
        <slot name="title"></slot>
      </div>
      <slot name="trailing"></slot>
    </h3>
    <div v-show="expanded" class="p-2 border-t-ds-s">
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const expanded = ref(false)
</script>

<style scoped></style>
