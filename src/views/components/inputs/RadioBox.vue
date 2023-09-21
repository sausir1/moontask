<template>
  <div class="grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-4">
    <MRadio id="radio-1"></MRadio>
    <MRadio id="radio-1"></MRadio>
    <MRadio id="radio" :readonly="true">Read only</MRadio>
    <MRadio id="radio" :disabled="true">Disabled</MRadio>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
