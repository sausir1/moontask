<script setup lang="ts"></script>

<template>
  <main class="font-sans m-grid bg-ds-goku text-ds-bulma">
    <TheSideMenu> </TheSideMenu>
    <TheHeader class="col-start-2 row-span-1"></TheHeader>
    <div class="p-4">
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
