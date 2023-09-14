<template>
  <component class="w-6 h-6" :is="iconComponent"></component>
</template>

<script setup lang="ts">
import type { Icon } from '@/plugins/useIcons'
import { computed, defineAsyncComponent, type VNodeProps } from 'vue'
interface Props extends VNodeProps {
  icon: Icon
}
const props = defineProps<Props>()
const icons = import.meta.glob(
  '../../../node_modules/@heroicons/vue/24/outline/esm/*.js',
  {
    eager: false,
  },
)
const fixed: Record<Icon, () => Promise<unknown>> = Object.entries(icons)
  .filter(([k]) => !k.endsWith('index.js'))
  .reduce((sum, [key, value]) => {
    key = key
      .replace('../../../node_modules/@heroicons/vue/24/outline/esm/', '')
      .replace('Icon.js', '')
    sum[key] = defineAsyncComponent(value as any)
    return sum
  }, {} as any)

const iconComponent = computed(() => {
  return fixed[props.icon]
})
</script>
