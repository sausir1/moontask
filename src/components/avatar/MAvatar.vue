<template>
  <div
    :class="{ 'rounded-full': rounded, [size]: true }"
    class="relative bg-ds-gohan flex items-center justify-center"
  >
    <div class="overflow-hidden">
      <img v-if="imageUrl" class="object-cover" :src="imageUrl" />
    </div>
    <p class="text-center font-semibold text-20-ds">
      <slot></slot>
    </p>
  </div>
</template>

<script setup lang="ts">
import { type Size } from '@/components/commonTypes'
import { computed } from 'vue'
type Props = {
  imageUrl: string
  rounded: boolean
  size: Size | '2xl'
}
const props = defineProps<Partial<Props>>()
const sizes = {
  xs: 'h-6 w-6',
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
  xl: 'h-14 w-14',
  '2xl': 'h-16 w-16',
}
const size = computed(() => sizes[props.size || 'md'])
</script>
