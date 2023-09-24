<template>
  <div>
    <div v-for="size in sizes" :key="size" class="flex flex-col gap-2 my-4">
      <label :for="`input-${size}`">{{ size }} input</label>
      <MInput
        placeholder="Placeholder"
        :id="`input-${size}`"
        :size="size"
        :error="false"
      >
        <template #icon><MIcon icon="AcademicCap" /></template>
        <template #icon-trailing><MIcon icon="ArchiveBox" /></template>
      </MInput>
    </div>
    <div v-for="size in sizes" :key="size" class="flex flex-col gap-2 my-4">
      <label :for="`input-${size}`">{{ size }} disabled input</label>
      <MInput
        :id="`input-${size}`"
        :disabled="true"
        :size="size"
        :error="false"
      >
        <template #icon><MIcon icon="AcademicCap" /></template>
        <template #icon-trailing><MIcon icon="ArchiveBox" /></template>
      </MInput>
    </div>
  </div>
</template>

<script setup lang="ts">
import MInput from '@/components/inputs/input/MInput.vue'
const sizes = ['sm', 'md', 'lg']
</script>

<style scoped></style>
