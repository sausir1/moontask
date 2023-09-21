<template>
  <nav
    class="bg-ds-gohan col-span-1 row-span-full border-r border-ds-beerus px-6 py-4"
  >
    <header class="flex items-center drop-shadow-lg mb-10">
      <IconLogo class="w-12 h-12 text-ds-piccolo" />
      <h2 class="text-32-ds font-bold tracking-wider ml-2">MoonTask</h2>
    </header>
    <slot name="before"></slot>
    <div>
      <template v-for="[key, routes] in toEntries(grouped)" :key="key">
        <MenuCategory
          class="border-t-2 first:border-t-0 border-ds-beerus py-4"
          v-slot="{ item }"
          :category="key"
          :routes="routes"
        >
          <RouterLink :to="item.path">
            <MMenuItem class="w-full">
              {{ item.name }}
            </MMenuItem>
          </RouterLink>
        </MenuCategory>
      </template>
    </div>
    <slot name="after"></slot>
  </nav>
</template>

<script setup lang="ts">
import { generateMenu } from '@/utils/file-based-menu'
import { groupBy, toEntries } from '@/utils/object'
import MMenuItem from '../menu-item/MMenuItem.vue'
interface Route {
  name: string
  path: string
  [x: string]: any
}
const routes = generateMenu()
function buildLeveledRoutes(routes: Route[]) {
  const grouped = groupBy(
    (item) => item.path.slice(1, item.path.slice(1).indexOf('/') + 1) || 'Main',
    routes,
  )
  return grouped
}

const grouped = buildLeveledRoutes(routes)
</script>
