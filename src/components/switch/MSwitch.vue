<template>
  <button
    type="button"
    role="switch"
    :aria-checked="`${checked}`"
    class="relative w-[3.75rem] h-8 bg-ds-beerus rounded-full group/switch overflow-clip aria-checked:overflow-visible before:duration-[450] before:transition-transform transition-colors delay-300"
    @click="checked = !checked"
  >
    <div
      class="absolute left-[10%] switch-icon group-aria-checked/switch:opacity-100 opacity-0"
    >
      <slot name="on-icon">a</slot>
    </div>
    <div
      class="absolute right-[10%] switch-icon group-aria-checked/switch:opacity-0 opacity-100"
    >
      <slot name="off-icon">b</slot>
    </div>
    <span
      class="knob rounded-full h-[calc(100%-8px)] transition-all left-1 group-aria-checked/switch:left-[calc(100%-4px)] duration-300 group-aria-checked/switch:-translate-x-full aspect-square bg-ds-goten inset-y-1 absolute group-aria-checked/switch:bg-white shadow-md"
      aria-hidden="true"
    />
  </button>
</template>

<script setup lang="ts">
import { ref, watch, defineModel } from 'vue'
interface Props {
  trueValue: any
  falseValue: any
}

const props = withDefaults(defineProps<Partial<Props>>(), {
  trueValue: true,
  falseValue: false,
})

const checked = ref(false)

const model = defineModel<any>({ required: false, default: false })
watch(
  () => checked.value,
  () => {
    checked.value
      ? (model.value = props.trueValue)
      : (model.value = props.falseValue)
  },
)
</script>
<style scoped>
.switch-icon {
  @apply top-1/2 -translate-y-1/2 transition-opacity delay-300;
}
[role='switch']::before {
  padding: 2px;
  content: ' ';
  position: absolute;
  inset: -1px;
  border-radius: 9999px;
  transform: scaleX(0);
  transform-origin: left;
}
[role='switch'][aria-checked='true']::before {
  transform: scaleX(1);
}
</style>
