<template>
  <label>
    <div
      :class="disabled ? 'cursor-not-allowed' : 'cursor-pointer'"
      class="relative flex text-14-ds items-center gap-2"
    >
      <input
        :id="id"
        v-model="checked"
        class="w-6 h-6 appearance-none peer disabled:cursor-not-allowed cursor-pointer"
        type="checkbox"
        :disabled="disabled"
        :indeterminate="indeterminate"
        :value="value || true"
      />
      <span
        class="inline-block transition-all absolute top-1 left-1 h-4 w-4 outline outline-[1.5px] rounded-ds-i-xs outline-ds-trunks peer-indeterminate:bg-opacity-100 peer-checked:bg-opacity-100 bg-opacity-0 -outline-offset-1 peer-checked:outline-none peer-indeterminate:outline-none"
        :class="checkedColor"
      ></span>
      <MIcon
        :icon="indeterminate ? 'Minus' : 'Check'"
        class="absolute top-1/2 left-1 -translate-y-1/2 !w-4 !h-4 stroke-2 peer-indeterminate:opacity-100 peer-indeterminate:scale-100 peer-checked:opacity-100 peer-checked:scale-100 scale-50 opacity-0 transition-all text-ds-goten"
        aria-hidden="true"
      ></MIcon>
      <span><slot /></span>
    </div>
  </label>
</template>

<script setup generic="T" lang="ts">
type Props<TValue> = {
  id?: string
  variant?: 'primary' | 'outline'
  checkedColor?: string
  indeterminate?: boolean
  disabled?: boolean
  value?: TValue
}

const props = withDefaults(defineProps<Props<T>>(), {
  variant: 'primary',
  checkedColor: 'bg-ds-piccolo',
  indeterminate: false,
  disabled: false,
})

const checked = defineModel<boolean | T[]>({ required: false, default: false })
</script>
