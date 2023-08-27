<template>
  <button
    type="button"
    :class="[buttonColor, buttonSize]"
    class="ds-i-item active:scale-95 font-semibold"
  >
    <div class="flex whitespace-nowrap">
      <slot></slot>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type LooseAutocomplete<T extends string> = T | Omit<string, T>

interface Props {
  size: 'sm' | 'md' | 'lg' | 'xl'
  color: LooseAutocomplete<'primary' | 'secondary' | 'tertiary' | 'ghost'>
}
const { size = 'md', color = 'primary' } = defineProps<Props>()

const buttonSize = computed(() => {
  const sizes = {
    sm: 'px-3 py-1 rounded-ds-i-sm',
    md: 'px-4 py-2 rounded-ds-i-sm',
    lg: 'py-3 px-4 rounded-ds-i-sm',
    xl: 'py-4 px-6 rounded-ds-i-sm',
  }
  return sizes[size]
})

const buttonColor = computed(() => {
  const colors = {
    primary: 'bg-ds-piccolo text-ds-goten',
    secondary: 'bg-transparent border border-ds-trunks text-ds-bulma',
    tertiary: 'bg-ds-hit border text-ds-goten',
    ghost: 'bg-ds-transparent text-ds-trunks',
  }
  return colors[color as keyof typeof colors] || color
})
</script>
