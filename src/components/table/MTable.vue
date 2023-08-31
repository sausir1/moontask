<template>
  <table
    class="text-left text-14-ds font-sans border-separate"
    :class="rowGapClass"
  >
    <thead>
      <tr>
        <th
          class="font-semibold"
          v-for="(column, index) in columns"
          :key="index"
        >
          <div :class="rowSizeClass" class="!py-0">
            {{ column.title }}
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="text-ds-bulma" :class="{ 'ds-zebra-rows': isZebra }">
      <MRow class="group/row" v-for="row in data" :key="row" tabindex="0">
        <MCell
          class="overflow-hidden relative"
          :class="[rowRoundness, hasBorders && 'ds-with-border']"
          v-for="column in columns"
          :key="column.prop"
        >
          <!-- ifhas actions - group-hover/row:!bg-ds-heles -->
          <div
            class="ds-value-wrapper bg-ds-gohan transition-colors -mx-px"
            :class="[rowSizeClass]"
          >
            {{ row[column.prop] }}
          </div>
        </MCell>
      </MRow>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import MRow from './MRow.vue'
import MCell from './MCell.vue'
const props = defineProps<Props>()

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

export interface TableColumn {
  title: string
  prop: string
  // width can either be string with size unit provided, or number which will be treated as pixel value
  width?: string | number
}

export type TableRowSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

interface Props {
  columns: TableColumn[]
  rowSize?: TableRowSize
  rowGap?: Exclude<TableRowSize, '2xl'>
  hasColumnResize?: boolean
  hasBorders?: boolean
  hasMinimap?: boolean
  isZebra?: boolean
  data: any[]
}

const rowGapClass = computed(() => {
  const sizes: Record<Exclude<TableRowSize, '2xl'>, string> = {
    xs: 'border-spacing-0',
    sm: 'border-spacing-y-1',
    md: 'border-spacing-y-2',
    lg: 'border-spacing-y-3',
    xl: 'border-spacing-y-4',
  }
  return sizes[props?.rowGap] || props.rowGap
})
const rowSizeClass = computed(() => {
  const sizes: Record<TableRowSize, string> = {
    xs: 'py-1 px-2',
    sm: 'py-1 px-3',
    md: 'py-2 px-3',
    lg: 'p-3',
    xl: 'p-4',
    '2xl': 'p-5',
  }
  return sizes[props.rowSize] || props.rowSize
})
const rowRoundness = computed(() => {
  const rowSize = props.rowSize || 'md'
  switch (rowSize) {
    case 'xs':
    case 'sm':
    case 'md':
      return 'ds-row-roundness-xs'
    case 'lg':
    case 'xl':
    case '2xl':
      return 'ds-row-roundness-sm'
  }
})
</script>
<style></style>
