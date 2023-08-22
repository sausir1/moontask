<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="font-sans m-grid text-theme-text-100">
    <div
      class="col-span-1 row-span-full bg-theme-bg-100 border-r border-r-white/10"
    >
      this is menu
    </div>
    <div
      class="col-start-2 row-span-1 bg-theme-bg-100 border-b border-b-white/10"
    >
      This is header
    </div>
    <div class="bg-theme-bg-300 p-4">
      <RouterView />
    </div>
  </main>
</template>

<style>
.m-grid {
  display: grid;
  min-height: 100vh;
  min-height: 100dvh;
  grid-template-columns: 20rem 1fr;
  grid-template-rows: 80px 1fr;
}
</style>
