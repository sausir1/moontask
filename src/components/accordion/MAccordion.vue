<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const expanded = ref(false)
</script>

<style scoped></style>
