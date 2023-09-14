<script setup lang="ts">
import { isString } from '@/utils/inspect'
import { parse } from 'marked'
import { ref, useSlots } from 'vue'
interface Props {
  markdown: string
}
const { markdown } = defineProps<Props>()
const content = ref(markdown)
</script>
<template>
  <div v-html="parse(content)"></div>
</template>
<style scoped>
:deep(p) {
  padding: 5rem;
  color: red;
  background: #000;
  border-radius: 4rem;
  transition: 150ms ease-in;
}
:deep(p:hover) {
  background: green;
  color: white;
}
</style>
