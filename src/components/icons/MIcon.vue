<template>
  <component :is="fixed[icon]"></component>
</template>

<script setup lang="ts">
import { type IconKeys } from '../Icons'
import { defineAsyncComponent, type VNodeProps } from 'vue'
const icons = import.meta.glob(
  '../../../node_modules/@heroicons/vue/24/outline/*.js',
  {
    eager: false,
  },
)
const fixed: Record<IconKeys, () => Promise<IconKeys>> = Object.entries(
  icons,
).reduce((sum, [key, value]) => {
  key = key
    .replace('../../../node_modules/@heroicons/vue/24/outline/', '')
    .replace('.js', '')
  sum[key] = defineAsyncComponent(value as any)
  return sum
}, {} as any)
interface Props extends VNodeProps {
  icon: IconKeys
}
defineProps<Props>()
</script>
