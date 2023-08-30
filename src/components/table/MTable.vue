<template>
  <table>
    <thead>
      <tr>
        <th v-for="(column, index) in columns" :key="index">
          {{ column.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in data" :key="row">
        <td v-for="column in columns" :key="column.prop">
          {{ row[column.prop] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const { rowSize = 'md' } = defineProps<Props>()

/**
 * UI
 * Visual recognition
 * Table stretch
 * Avoid repeated content
 * Group similar data (by color, alignment, font style and etc.)
 */
/**
 * ~~~ UX ~~~~
 * display density
 * hover actions
 * resizable columns
 * horizontal scroll
 * sticky header
 */

const columns: readonly TableColumn[] = [
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
] as const

export interface TableColumn {
  title: string
  prop: string
  // width can either be string with size unit provided, or number which will be treated as pixel value
  width?: string | number
}

type TableRowSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

interface Props {
  columns: TableColumn[]
  hasMinimap?: boolean
  rowSize?: TableRowSize
  hasColumnResize?: boolean
  data: any[],
}

const rowSizeClass = computed(() => {
  this.
})
</script>
