<template>
  <div
    :class="{
      '-left-0.5': xPosition === 'left',
      '-right-0.5': xPosition === 'right',
      '-bottom-0.5': yPosition === 'bottom',
      '-top-0.5': yPosition === 'top',
      [color]: true,
    }"
    class="absolute h-3.5 w-3.5 rounded-full border-2 border-solid"
  />
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    xPosition: 'left' | 'right'
    yPosition: 'top' | 'bottom'
    color: string
  }>(),
  {
    xPosition: 'right',
    yPosition: 'bottom',
    color: 'bg-ds-piccolo',
  },
)
</script>
