<template>
  <div class="px-8">
    <h1>Row size</h1>
    <input type="radio" value="xs" v-model="rowSize" />
    <input type="radio" value="sm" v-model="rowSize" />
    <input type="radio" value="md" v-model="rowSize" />
    <input type="radio" value="lg" v-model="rowSize" />
    <input type="radio" value="xl" v-model="rowSize" />
    <input type="radio" value="2xl" v-model="rowSize" />
    <h1>gap size</h1>
    <input type="radio" value="xs" v-model="rowGap" />
    <input type="radio" value="sm" v-model="rowGap" />
    <input type="radio" value="md" v-model="rowGap" />
    <input type="radio" value="lg" v-model="rowGap" />
    <input type="radio" value="xl" v-model="rowGap" />
    <h2>is zebra?</h2>
    <input type="checkbox" v-model="zebra" />
    <h2>Has borders</h2>
    <input type="checkbox" v-model="borders" />
    <MTable
      :columns="columns"
      :data="tableData"
      :row-size="rowSize"
      :row-gap="rowGap"
      :is-zebra="zebra"
      :has-borders="borders"
      class="w-full"
    ></MTable>
  </div>
</template>

<script setup lang="ts">
import MTable, {
  type TableColumn,
  type TableRowSize,
} from '@/components/table/MTable.vue'
import { reactive, ref } from 'vue'
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

const rowSize = ref<TableRowSize>('sm')
const rowGap = ref<Exclude<TableRowSize, '2xl'>>('sm')
const zebra = ref(false)
const borders = ref(false)

const tableData = reactive(makeMockData(25))

function makeMockData(length: number) {
  return Array.from({ length }, (_, i) => ({
    name: i % 2 === 0 ? 'John' : 'Jane',
    last: i % 2 === 0 ? 'Doe' : 'Doella',
    status: i % 3 === 0 ? 'married' : 'single',
    gender: i % 2 === 0 ? 'male' : 'female',
  }))
}
</script>
