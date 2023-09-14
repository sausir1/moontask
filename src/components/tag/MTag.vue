<template>
  <div
    class="flex gap-1 items-center rounded-ds-s-xs text-10-ds font-semibold"
    :class="[size, $attrs.class || 'text-ds-goten bg-ds-popo']"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size: 'xs' | 'sm'
}
const size = computed(() => {
  const sizes = {
    xs: 'px-2 text-10-ds',
    sm: 'px-2 py-1 text-12-ds',
  }
  return sizes[props.size]
})
const props = withDefaults(defineProps<Partial<Props>>(), { size: 'sm' })
</script>
