<template>
  <div v-for="color in colors">
    <h2 class="font-semibold text-4xl">{{ color }}</h2>
    <template v-for="size in sizes">
      <MButton class="mr-4" :color="color" :size="size">{{
        `${color}-${size}`
      }}</MButton>
      <MButton class="mr-4" :color="color" :size="size" disabled>
        {{ `${color}-${size}` }}</MButton
      >
    </template>
  </div>
  <div class="w-72 border">
    <MButton block>Test</MButton>
  </div>
</template>

<script setup lang="ts">
import MButton from '@/components/button/MButton.vue'

const colors = ['primary', 'secondary', 'tertiary', 'ghost']
const sizes = ['sm', 'md', 'lg', 'xl'] as const
</script>
