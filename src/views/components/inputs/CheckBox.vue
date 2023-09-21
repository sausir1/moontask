<template>
  <div class="grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-4">
    <MCheckbox></MCheckbox>
    <MCheckbox :readonly="true">Read only</MCheckbox>
    <MCheckbox :disabled="true">Disabled</MCheckbox>
    <MCheckbox indeterminate>indeterminate</MCheckbox>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
