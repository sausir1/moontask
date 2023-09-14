<template>
  <button
    class="ds-i-item disabled:opacity-40 disabled:pointer-events-none flex text-left items-center gap-2 p-2 rounded-ds-i-sm focus:ring-ds-piccolo/20"
  >
    <slot>
      <MTitle>Your value</MTitle>
    </slot>
  </button>
</template>

<script setup lang="ts">
import MTitle from './MTitle.vue'
</script>
