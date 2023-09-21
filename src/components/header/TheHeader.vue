<template>
  <div
    class="bg-ds-gohan border-b border-ds-beerus items-center flex grow shadow-sm px-4"
  >
    <slot></slot>
    {{ darkTheme }}
    <MSwitch
      v-model="darkTheme"
      class="ml-auto bg-ds-krillin before:bg-ds-popo"
    >
      <template #on-icon>
        <MIcon icon="Moon" class="!w-5 !h-5"></MIcon>
      </template>
      <template #off-icon>
        <MIcon icon="Sun" class="!w-5 !h-5"></MIcon>
      </template>
    </MSwitch>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const darkTheme = ref(false)

watch(
  () => darkTheme.value,
  (value) => {
    const nextTheme = value ? 'theme-moon-dark' : 'theme-moon-light'
    const currTheme = value ? 'theme-moon-light' : 'theme-moon-dark'
    document.documentElement.classList.replace(currTheme, nextTheme)
  },
)
</script>
