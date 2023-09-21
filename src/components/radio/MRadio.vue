<template>
  <label
    class="flex min-w-0 truncate text-bulma items-center gap-2 cursor-pointer text-14-ds"
    :class="{
      'cursor-not-allowed': disabled,
      'opacity-60 pointer-events-none': readonly,
    }"
    :id="`${id}-label`"
    :for="id"
  >
    <input
      :id="id"
      class="w-4 h-4 p-1 rounded-full focus:ring-0 focus:outline-0 focus:ring-offset-0 focus:shadow-none focus:outline-offset-0 border-ds-trunks transition-colors text-ds-piccolo checked:accent-current"
      :class="{ 'cursor-not-allowed': disabled }"
      type="radio"
      :disabled="disabled"
      :readonly="props.readonly"
    />
    <span class="select-none"><slot>Select this for big money</slot></span>
  </label>
</template>

<script setup lang="ts">
interface Props {
  checked?: boolean
  disabled?: boolean
  readonly?: boolean
  id?: string | undefined
}

const props = withDefaults(defineProps<Props>(), {
  checked: false,
  disabled: false,
  readonly: false,
  id: undefined,
})
</script>
<style scoped></style>
