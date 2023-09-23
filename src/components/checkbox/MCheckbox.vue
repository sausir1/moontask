<template>
  <label>
    <!-- // :id="$attrs?.id as string" -->
    <div class="relative flex text-14-ds items-center gap-2 cursor-pointer">
      <input
        v-model="checked"
        class="w-6 h-6 appearance-none peer select-none"
        :class="{ 'cursor-not-allowed': disabled }"
        type="checkbox"
        :disabled="disabled"
        :readonly="props.readonly"
        :indeterminate="indeterminate"
        :checked="indeterminate ? false : checked"
        :aria-checked="indeterminate ? 'mixed' : `${checked}`"
      />
      <span
        class="inline-block transition-all absolute top-1 left-1 h-4 w-4 outline outline-[1.5px] rounded-ds-i-xs outline-ds-trunks -outline-offset-1 peer-aria-checked:outline-none peer-indeterminate:outline-none"
        :class="{ [checkedColor]: checked || indeterminate }"
      ></span>
      <MIcon
        :icon="indeterminate ? 'Minus' : 'Check'"
        class="absolute top-1/2 left-1 -translate-y-1/2 !w-4 !h-4 stroke-2 peer-indeterminate:opacity-100 peer-indeterminate:scale-100 peer-aria-checked:opacity-100 peer-aria-checked:scale-100 scale-50 opacity-0 transition-all text-ds-goten"
        aria-hidden="true"
      ></MIcon>
      <span><slot /> {{ indeterminate }}-{{ checked }}</span>
    </div>
  </label>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'outline'
  checkedColor?: string
  indeterminate?: boolean
  disabled?: boolean
  readonly?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  checkedColor: 'bg-ds-piccolo',
  indeterminate: false,
  disabled: false,
  readonly: false,
})

const checked = defineModel({ required: false, default: false })
</script>
