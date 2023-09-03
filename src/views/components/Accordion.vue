<template>
  <div>
    <select v-model="size">
      <option value="sm">small</option>
      <option value="md">medium</option>
      <option value="lg">large</option>
      <option value="xl">extra large</option>
    </select>
    <MAccordion id="test1" :size="size">
      <template #title> Accordion title </template>
      this is content
    </MAccordion>
  </div>
</template>

<script setup lang="ts">
import MAccordion, {
  type AccordionSize,
} from '@/components/accordion/MAccordion.vue'
import { ref } from 'vue'

const size = ref<AccordionSize>('md')
</script>
<style></style>
