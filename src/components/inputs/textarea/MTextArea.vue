<template>
  <textarea
    placeholder="placeholder text..."
    aria-invalid="false"
    class="rounded-ds-i-sm p-4 m-input"
  >
  </textarea>
</template>

<script setup lang="ts"></script>
<style>
.m-input {
  @apply bg-ds-gohan outline-1 outline-ds-beerus text-ds-trunks outline;
}
.m-input:hover {
  @apply outline-ds-piccolo;
}
.m-input[aria-invalid='true'] {
  @apply aria-invalid:outline-ds-chichi aria-invalid:outline-2;
}
.m-input:focus {
  @apply outline-1 ring-4 ring-ds-piccolo/20 outline-ds-piccolo;
}
</style>
