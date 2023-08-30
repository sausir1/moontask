<template>
  <section class="accordion-item">
    <h3 class="flex p-2 gap-2">
      <slot name="leading"></slot>
      <button
        class="grow accordion-item-header text-left"
        @click="expanded = !expanded"
      >
        <slot name="title"></slot>
      </button>
      <slot name="trailing"></slot>
    </h3>
    <div v-show="expanded" class="p-2 border-t-ds-s text-sm">
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import { accordionItem } from './constants'
import type { PropType } from 'vue'

const expanded = ref(false)

provide(accordionItem, {
  toggleExpand: () => (expanded.value = !expanded.value),
})

type Props =
  | {
      size?: 'sm' | 'md' | 'lg' | 'xl'
      contentOutside?: boolean
      hasDivider?: never
    }
  | {
      size?: 'sm' | 'md' | 'lg' | 'xl'
      contentOutside?: never
      hasDivider?: boolean
    }

const props = withDefaults(defineProps<Props>(), {
  size: 'sm',
  hasDivider: true,
})

const size = computed(() => {
  const wrapperSizes = {
    sm: 'p-2',
    md: 'px-3 py-2',
    lg: 'p-3',
    xl: 'p-4',
  }
  const headerSizes = {
    sm: 'text-xs',
    md: 'px-3 py-2',
    lg: 'p-3',
    xl: 'p-4',
  }
  return {
    wrapper: wrapperSizes[props.size],
    header: headerSizes[props.size],
  }
})
</script>
<style>
.accordion-item {
  @apply rounded-ds-i-sm bg-ds-gohan;
}
.accordion-item-header {
  @apply text-ds-bulma font-semibold;
}
</style>
