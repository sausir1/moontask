<template>
  <div>
    <MAlert class="max-w-xs bg-ds-gohan">
      <template #title>this is title</template>
      <template #trailing>X</template>
      Data uploaded to server
    </MAlert>
  </div>
</template>

<script setup lang="ts">
import MAlert from '@/components/alert/MAlert.vue'
</script>

<style scoped></style>
