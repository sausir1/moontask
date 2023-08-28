<template>
  <button
    type="button"
    :data-item-left="!!$slots.icon"
    :data-item-right="!!$slots.iconRight"
    :class="[
      buttonColor,
      buttonSize,
      {
        'w-full block text-center': block,
      },
    ]"
    class="ds-i-item active:scale-[.97] font-semibold disabled:opacity-40 disabled:pointer-events-none"
    @focus="$emit('focus', $event)"
    @click="$emit('click', $event)"
    @blur="$emit('blur', $event)"
  >
    <div
      class="flex whitespace-nowrap items-center justify-center"
      :class="contentGap"
    >
      <slot name="icon"></slot>
      <slot></slot>
      <slot name="icon-right"></slot>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type LooseAutocomplete<T extends string> = T | Omit<string, T>

interface Props {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: LooseAutocomplete<'primary' | 'secondary' | 'tertiary' | 'ghost'>
  block?: boolean
}
const { size = 'md', color = 'primary', block = false } = defineProps<Props>()

const contentGap = computed(() => {
  const sizes = {
    xs: 'gap-1',
    sm: 'gap-1',
    md: 'gap-2',
    lg: 'gap-3',
    xl: 'gap-4',
  }
  return sizes[size]
})

const buttonSize = computed(() => {
  const sizes = {
    xs: 'px-2 py-1 rounded-ds-i-xs item-left:pl-1 item-right:pr-1',
    sm: 'px-3 py-1 rounded-ds-i-sm item-left:pl-1 item-right:pr-1',
    md: 'px-4 py-2 rounded-ds-i-sm item-left:pl-2 item-right:pr-2',
    lg: 'py-3 px-4 rounded-ds-i-sm item-left:pl-3 item-right:pr-3',
    xl: 'py-4 px-6 rounded-ds-i-sm item-left:pl-4 item-right:pr-4',
  }
  return sizes[size]
})

const buttonColor = computed(() => {
  const colors = {
    primary: 'bg-ds-piccolo text-ds-goten ring-ds-piccolo/20',
    secondary:
      'bg-transparent border border-ds-trunks text-ds-bulma ring-ds-bulma/20',
    tertiary: 'bg-ds-hit border-0 text-ds-goten ring-ds-hit/20',
    ghost:
      'bg-ds-transparent text-ds-trunks hover:text-bulma hover:text-ds-bulma focus:text-ds-bulma ring-ds-trunks/50',
  }
  return colors[color as keyof typeof colors] || color
})
</script>
