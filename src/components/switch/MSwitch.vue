<template>
  <button
    type="button"
    role="switch"
    :aria-checked="`${checked}`"
    class="relative w-[3.75rem] h-8 bg-ds-beerus rounded-full before:bg-ds-piccolo group/switch overflow-hidden before:duration-500 before:transition-[scale]"
    @click="checked = !checked"
  >
    <span
      class="knob rounded-full h-[calc(100%-8px)] transition-all left-1 group-aria-checked/switch:left-[calc(100%-4px)] duration-300 group-aria-checked/switch:-translate-x-full aspect-square bg-ds-goten inset-y-1 absolute group-aria-checked/switch:bg-white shadow-md"
      aria-hidden="true"
    />
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(false)
</script>
<style scoped>
[role='switch']::before {
  content: ' ';
  --size: 4rem;
  height: var(--size);
  width: var(--size);
  position: absolute;
  left: -110%;
  top: -50%;
  border-radius: 50%;
}
[role='switch'][aria-checked='true']::before {
  scale: 4;
}
</style>
