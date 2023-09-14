<script setup lang="ts">
import { generateMenu } from './utils/file-based-menu'
const routes = generateMenu()
</script>

<template>
  <main class="font-sans m-grid bg-ds-goku">
    <nav
      class="bg-ds-gohan col-span-1 row-span-full border-r border-ds-beerus px-6 py-4"
    >
      <header class="flex items-center drop-shadow-lg mb-10">
        <IconLogo class="w-12 h-12 text-ds-piccolo" />
        <h2 class="text-4xl font-semibold ml-2">MoonTask</h2>
      </header>
      <ul>
        <li v-for="route in routes" :key="route.path">
          <RouterLink :to="route.path">
            {{ route.name }}
          </RouterLink>
        </li>
        <li>
          <MMenuItem class="w-full">
            <MMultiLine
              title="testas"
              text="cia nelabai svarbus tekstas kuris turetu overflowint"
            ></MMultiLine>
          </MMenuItem>
          <MMenuItem disabled class="w-full">
            <MMultiLine
              title="testas"
              text="cia nelabai svarbus tekstas kuris turetu overflowint"
            ></MMultiLine>
          </MMenuItem>
          <MMenuItem disabled />
        </li>
      </ul>
    </nav>
    <!-- TODO HERE -->
    <!-- TODO HERE -->
    <div class="bg-ds-gohan col-start-2 row-span-1 border-b border-ds-beerus">
      This is header
      <MIcon icon="AcademicCap"></MIcon>
    </div>
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
