<template>
  <div class="grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-4">
    <MCheckbox checked-color="bg-ds-krillin" v-model="value"></MCheckbox>
    <MCheckbox v-model="value" :readonly="true">Read only</MCheckbox>
    <MCheckbox v-model="value" :disabled="true">Disabled</MCheckbox>
    <MCheckbox v-model="value" indeterminate>indeterminate</MCheckbox>
  </div>
  <div class="my-12">
    <h4 class="text-32-ds font-semibold">TEST</h4>
    <MCheckbox :indeterminate="isIndetermined" v-model="allSelected"
      >Select All</MCheckbox
    >
    <MCheckbox v-model="selects[0]">Select 1</MCheckbox>
    <MCheckbox v-model="selects[1]">Select 2</MCheckbox>
    <MCheckbox v-model="selects[2]">Select 3</MCheckbox>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const value = ref(false)
const selects = ref([false, false, false])
const isIndetermined = computed(() => {
  return selects.value.includes(true) && selects.value.includes(false)
})
const allSelected = computed({
  get() {
    return !selects.value.includes(false)
  },
  set(v) {
    if (v) selects.value.forEach((_, index) => (selects.value[index] = true))
    else selects.value = selects.value.map((v) => false)
  },
})
</script>

<style scoped></style>
