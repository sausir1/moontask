<template>
  <ul>
    <li class="mb-2">
      <h3 class="uppercase text-12-ds text-ds-trunks tracking-widest">
        {{ category }}
      </h3>
    </li>
    <li v-for="route in routes" :key="route.path + route.name">
      <slot :item="route"></slot>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{ category: string; routes: { name: string; path: string }[] }>()
</script>
