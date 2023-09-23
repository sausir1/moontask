<template>
  <div class="grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-4">
    <MCheckbox checked-color="bg-ds-krillin"></MCheckbox>
    <MCheckbox :disabled="true">Disabled</MCheckbox>
    <MCheckbox indeterminate>indeterminate</MCheckbox>
  </div>
  <div>Selected values: {{ checked }}</div>
  <div class="my-12">
    <MCheckbox v-model="allChecked" :indeterminate="isIndeterminate">
      Mr. Indeterminate</MCheckbox
    >
    <MCheckbox
      v-model="checked"
      v-for="option in checkboxOptions"
      :key="option.name"
      :value="option"
      id="test123"
    >
      Checkbox Option {{ option.name }}</MCheckbox
    >
  </div>
</template>

<script setup lang="ts">
import MCheckbox from '@/components/checkbox/MCheckbox.vue'
import { computed, ref } from 'vue'

type TestValue = { name: number }
const checkboxOptions: TestValue[] = Array.from({ length: 6 }, (_, i) => ({
  name: ++i,
}))

const checked = ref<TestValue[]>([])

const isIndeterminate = computed(() => {
  return (
    checked.value.length > 0 && checked.value.length < checkboxOptions.length
  )
})

const allChecked = computed({
  get() {
    return checked.value.length === checkboxOptions.length
  },
  set(value) {
    if (value) checked.value = checkboxOptions
    else checked.value = []
  },
})
</script>

<style scoped></style>
