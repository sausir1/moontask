<template>
  <div class="modal__panel fixed inset-0 overflow-y-auto text-14-ds z-[2]">
    <div
      class="flex min-h-full items-center justify-center"
      @click.self="modalContext?.closeModal"
    >
      <div
        v-bind="$attrs"
        :class="modalContext?.size.value"
        class="rounded-ds-s-md p-2 grow"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { modalKey } from './injections'

defineOptions({
  inheritAttrs: false,
})

const modalContext = inject(modalKey)
</script>
