<template>
  <div class="m-alert p-4 rounded-ds-s-sm" role="alert">
    <div class="flex">
      <header class="flex grow">
        <slot name="leading"></slot>
        <h3 class="alert-title grow text-ds-bulma font-semibold">
          <slot></slot>
        </h3>
      </header>
      <section class="alert-content text-bulma mt-2">
        <slot></slot>
      </section>
      <div class="shrink-0">
        <slot name="trailing"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// TODO think about how to solve the dynamic style
interface Props {
  border: boolean
  borderColor: string
}
defineProps()
</script>
