<template>
  <div
    class="m-alert p-4 rounded-ds-s-sm"
    :class="{ 'bg-ds-gohan': variant === 'generic' }"
    role="alert"
  >
    <div class="flex">
      <div class="flex flex-col grow">
        <header v-if="hasHeader" class="flex gap-3">
          <slot name="leading"></slot>
          <h3 class="alert-title grow text-ds-bulma font-semibold">
            <slot name="title"></slot>
          </h3>
        </header>
        <section
          :class="{ 'mt-2': hasHeader }"
          class="alert-content text-bulma"
        >
          <slot></slot>
        </section>
      </div>
      <div v-if="$slots.trailing" class="shrink-0">
        <slot name="trailing"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type AlertVariant = 'custom' | 'generic'
// TODO think about how to solve the dynamic style
interface Props {
  hasOutline: boolean
  variant: AlertVariant
}
interface Slots {
  default: any
  trailing: any
  leading: any
  title: any
}
const slots = defineSlots<Slots>()
defineProps<Partial<Props>>()

// const slots = useSlots()
const hasHeader = computed(() => {
  return slots.default || slots.leading
})
</script>
