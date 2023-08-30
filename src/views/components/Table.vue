<template>
  <div>
    <MTable :columns="columns" :data="tableData"></MTable>
  </div>
</template>

<script setup lang="ts">
import MTable, { type TableColumn } from '@/components/table/MTable.vue'
const columns: TableColumn[] = [
  {
    title: 'Name',
    prop: 'name',
  },
  {
    title: 'Surname',
    prop: 'last',
  },
  {
    title: 'Status',
    prop: 'status',
  },
  {
    title: 'Gender',
    prop: 'gender',
  },
]

const tableData = makeMockData(25)

function makeMockData(length: number) {
  return Array.from({ length }, (_, i) => ({
    name: i % 2 === 0 ? 'John' : 'Jane',
    last: i % 2 === 0 ? 'Doe' : 'Doella',
    status: i % 3 === 0 ? 'married' : 'single',
    gender: i % 2 === 0 ? 'male' : 'female',
  }))
}
</script>
