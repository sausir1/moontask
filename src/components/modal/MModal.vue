<template>
  <Transition>
    <div class="modal-wrapper" v-show="open">
      <slot></slot>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed, provide, watch } from 'vue'
import { modalKey } from './injections'

interface Props {
  size: 'sm' | 'md' | 'lg' | 'xl'
  open: boolean
}
const props = withDefaults(defineProps<Partial<Props>>(), {
  size: 'md',
  open: false,
})
const emit = defineEmits<{
  (event: 'close', value: boolean): void
}>()
const size = computed(() => {
  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-4xl',
    xl: 'max-w-7xl',
  }
  return sizes[props.size]
})
watch(
  () => props.open,
  () => console.log('opening'),
)
provide(modalKey, { size, closeModal: closeModal })
function closeModal() {
  console.log('closing')
  emit('close', false)
}
</script>
<style scoped>
[role='dialog'] {
  box-shadow:
    0px 0px 1px 0px rgba(0, 0, 0, 0.4),
    0px 8px 24px -6px rgba(0, 0, 0, 0.16);
}
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.25s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-active :deep(.modal__panel),
.v-leave-active :deep(.modal__panel) {
  transition-delay: 150ms;
  transition:
    transform 0.25s ease-in-out,
    scale 0.25s linear;
}

.v-enter-from :deep(.modal__panel),
.v-leave-to :deep(.modal__panel) {
  scale: 0.99;
  transform: translateY(-1rem);
}
</style>
