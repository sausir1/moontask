<template>
  <div
    class="fixed inset-0 z-[1]"
    aria-hidden="true"
    @click="context?.closeModal"
  />
</template>
<script setup lang="ts">
import { inject, onMounted, onUnmounted } from 'vue'
import { modalKey } from './injections'
// TODO prevent scroll on document container
const context = inject(modalKey)
onMounted(() => {
  document.documentElement.style.overflow = 'none'
})
onUnmounted(() => {
  document.documentElement.style.overflow = ''
})
</script>
