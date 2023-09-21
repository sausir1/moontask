<template>
  <label
    class="flex min-w-0 truncate text-bulma items-center gap-2 cursor-pointer text-14-ds"
    :class="{
      'cursor-not-allowed': disabled,
      'opacity-60 pointer-events-none': readonly,
    }"
  >
    <input
      class="w-4 h-4 p-1 rounded-ds-i-xs overflow-hidden focus:ring-0 focus:outline-0 focus:ring-offset-0 focus:shadow-none focus:outline-offset-0 border-ds-trunks text-ds-piccolo transition-colors"
      :class="{ 'cursor-not-allowed': disabled }"
      type="checkbox"
      :disabled="disabled"
      :readonly="props.readonly"
      :indeterminate="indeterminate"
    />
    <span class="select-none"><slot>Select this for big money</slot></span>
  </label>
</template>

<script setup lang="ts">
interface Props {
  indeterminate?: boolean
  checked?: boolean
  disabled?: boolean
  readonly?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  indeterminate: true,
  checked: false,
  disabled: false,
  readonly: false,
})
</script>
