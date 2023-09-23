<template>
  <label>
    <div class="relative flex text-14-ds items-center gap-2 cursor-pointer">
      <input
        :id="id"
        v-model="checked"
        class="w-6 h-6 appearance-none peer select-none"
        :class="{ 'cursor-not-allowed': disabled }"
        type="radio"
        :disabled="disabled"
        :readonly="readonly"
        :value="option"
      />
      <!-- :checked="isChecked" -->
      <span
        aria-hidden="true"
        class="inline-flex items-center justify-center transition-all absolute top-1 left-1 h-4 w-4 outline outline-[1.5px] rounded-ds-s-lg -outline-offset-1 peer-checked:outline-current"
        :class="{ [checkedColor]: isChecked }"
      >
        <span
          class="rounded-ds-s-lg w-2 h-2 block bg-current"
          :class="{ hidden: !isChecked }"
        ></span>
      </span>

      <span><slot /></span>
    </div>
  </label>
</template>

<script setup generic="T extends any" lang="ts">
import { objectEquals, stringify } from '@/utils/object'
import { isPrimitive } from '@/utils/inspect'
import { computed } from 'vue'

type RadioProps<TValue> = {
  option: TValue
  checkedColor?: string
  disabled?: boolean
  readonly?: boolean
  id?: string
}

const props = withDefaults(defineProps<RadioProps<T>>(), {
  variant: 'primary',
  checkedColor: 'text-ds-piccolo',
  indeterminate: false,
  disabled: false,
  readonly: false,
})

const checked = defineModel<T | null>()
// TODO could be done without checking this
const isChecked = computed(() => {
  if (!checked.value) return false
  if (isPrimitive(props.option)) {
    return checked.value === props.option
  }
  return objectEquals(checked.value, props.option)
})
</script>
