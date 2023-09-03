<template>
  <section
    class="accordion bg-ds-gohan rounded-ds-i-sm"
    :class="{ 'accordion-expanded': expanded }"
  >
    <h3 class="flex gap-2" :class="headerClass">
      <slot name="leading"></slot>
      <button
        class="grow accordion-item-header text-left"
        :v-bind="ariaProps.trigger"
        @click="expanded = !expanded"
      >
        <slot name="title"></slot>
      </button>
      <slot name="trailing"></slot>
    </h3>
    <div
      :v-bind="ariaProps.panel"
      :class="{ 'bg-ds-gohan': !contentOutside }"
      class="border-t-ds-s text-sm overflow-hidden accordion-content"
    >
      <div class="rounded-ds-s-sm" :class="panelClass">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import { accordionItem } from './constants'
import { type Size } from '@/components/commonTypes'
export type AccordionSize = Exclude<Size, 'xs'>

type Props =
  | {
      size?: AccordionSize
      contentOutside?: boolean
      hasDivider?: never
    }
  | {
      size?: AccordionSize
      contentOutside?: never
      hasDivider?: boolean
    }

const props = withDefaults(defineProps<Props & { id: string }>(), {
  size: 'sm',
  hasDivider: true,
})

const expanded = ref(false)
const ariaProps = computed(() => {
  const panelId = `${props.id}-panel`
  const triggerId = `${props.id}-trigger`
  return {
    trigger: {
      'aria-controls': panelId,
      'aria-expanded': `${expanded.value}`,
      id: triggerId,
    },
    panel: {
      role: 'region',
      'aria-labelledby': triggerId,
    },
  }
})

provide(accordionItem, {
  toggleExpand: () => (expanded.value = !expanded.value),
})

const headerSize = {
  sm: 'p-2 text-12-ds',
  md: 'py-2 px-3 text-14-ds',
  lg: 'p-3 text-14-ds',
  xl: 'p-4 text-16-ds',
}
const panelSize = {
  sm: 'p-2',
  md: 'p-2',
  lg: 'p-3',
  xl: 'p-4',
}

const headerClass = computed(() => {
  return headerSize[props.size]
})
const panelClass = computed(() => {
  if (props.contentOutside) return ''
  return panelSize[props.size]
})
</script>
<style>
.accordion-item {
  @apply rounded-ds-i-sm;
}
.accordion-item-header {
  @apply text-ds-bulma font-semibold;
}
.accordion {
  --content-height: 0fr;
  --ds-accordion-transition: 500ms;
  transition: grid-template-rows var(--ds-accordion-transition);
  display: grid;
  grid-template-rows: auto var(--content-height);
}
.accordion > * {
  overflow: hidden;
}
.accordion-content {
  visibility: hidden;
  opacity: 0;
  transition:
    visibility var(--ds-accordion-transition),
    opacity var(--ds-accordion-transition);
  min-height: 0;
}
.accordion.accordion-expanded {
  --content-height: 1fr;
}
.accordion.accordion-expanded .accordion-content {
  visibility: visible;
  opacity: 1;
}
</style>
