<template>
  <div
    :class="[
      inputSize,
      {
        'outline-2 ring-4 ring-ds-piccolo ring-opacity-20 outline-ds-piccolo':
          state.focused,
        'opacity-40 cursor-not-allowed': disabled,
      },
    ]"
    :data-size="props.size || 'sm'"
    class="inline-flex bg-ds-gohan text-bulma outline-ds-beerus item-sm:rounded-ds-i-xs rounded-ds-i-sm gap-2 -outline-offset-1 outline-1 outline"
  >
    <div aria-hidden="true" v-if="$slots['icon']">
      <slot name="icon" />
    </div>
    <input
      :id="id"
      type="text"
      :disabled="disabled"
      :placeholder="placeholder"
      class="grow placeholder:text-trunks outline-none bg-inherit disabled:cursor-not-allowed"
      @focusin="state.focused = true"
      @focusout="state.focused = false"
    />
    <div aria-hidden="true" v-if="$slots['icon-trailing']">
      <slot name="icon-trailing" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
defineSlots<{ icon: any; 'icon-trailing': any }>()
const sizes = {
  sm: 'py-1 px-2',
  md: 'py-2 px-3',
  lg: 'p-3',
  xl: 'p-4',
} as const
const state = reactive({
  focused: false,
})

interface Props {
  id: string
  placeholder: string
  size: keyof typeof sizes
  error: boolean
  type: 'text' | 'number'
  disabled: boolean
}

const props = defineProps<Partial<Props>>()

const inputSize = computed(() => {
  return sizes[props.size || 'sm']
})
</script>
<style>
.ds-input {
  @apply -outline-offset-1;
}
</style>
