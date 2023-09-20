<template>
  <div>
    <MButton @click="open = true">Open Modal</MButton>
    <MSwitch class="m-8"></MSwitch>
    <MModal :open="open" @close="open = false">
      <MBackdrop class="bg-ds-zeno" />
      <MPanel class="bg-ds-gohan">
        <div
          class="h-48 bg-ds-jiren text-center text-ds-piccolo rounded-ds-s-sm"
        >
          Replace with content
        </div>
      </MPanel>
    </MModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const open = ref(false)
</script>

<style scoped></style>
