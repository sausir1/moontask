<template>
  <div class="grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-4">
    <MRadio
      v-model="value"
      :id="commonId"
      v-for="option in radioOptions"
      :key="option.name"
      :option="option"
      >Radio option {{ option.name }}</MRadio
    >
  </div>
  <p>value is: {{ value }}</p>
</template>

<script setup lang="ts">
import MRadio from '@/components/radio/MRadio.vue'
import { ref } from 'vue'

type TestValue = { name: number }
const commonId = 'radio-123'
const radioOptions: TestValue[] = Array.from({ length: 6 }, (_, i) => ({
  name: ++i,
}))

const value = ref<TestValue | null>(null)
</script>

<style scoped></style>
