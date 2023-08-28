<template>
  <table>
    <thead>
      <tr>
        <th v-for="(column, index) in columns" :key="index"></th>
      </tr>
    </thead>
  </table>
</template>

<script setup lang="ts">
interface TableColumn {
  title: string
  prop: string
}

interface Props {
  columns: TableColumn[]
  hasMinimap?: boolean
  rowSize?: 'sm' | 'lg'
  hasColumnResize?: boolean
}

defineProps<Props>()
</script>
