<template>
  <div class="grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-4">
    <div>
      <h3 class="text-ds-trunks text-14-ds">menu item default</h3>
      <MMenuItem class="w-full">
        <MTitle>{{ menuText }}</MTitle>
      </MMenuItem>
    </div>
    <div>
      <h3 class="text-ds-trunks text-14-ds">menu item (with label right)</h3>
      <MMenuItem class="w-full">
        <MTitle>{{ menuText }}</MTitle>
        <MTag class="bg-ds-gohan text-ds-popo">99</MTag>
      </MMenuItem>
    </div>
    <div>
      <h3 class="text-ds-trunks text-14-ds">
        menu item (with trailing element)
      </h3>
      <MMenuItem class="w-full">
        <MTitle>{{ menuText }}</MTitle>
        <MIcon icon="ArrowDownCircle"></MIcon>
      </MMenuItem>
    </div>
    <div>
      <h3 class="text-ds-trunks text-14-ds">menu item (with meta right)</h3>
      <MMenuItem class="w-full">
        <MTitle>{{ menuText }}</MTitle>
        <span class="text-ds-trunks text-12-ds">⌘+K</span>
      </MMenuItem>
    </div>
    <div>
      <h3 class="text-ds-trunks text-14-ds">
        menu item (with radio button right)
      </h3>
      <MMenuItem class="w-full">
        <MTitle>{{ menuText }}</MTitle>
      </MMenuItem>
    </div>
    <div>
      <h3 class="text-ds-trunks text-14-ds">menu item (with checkbox right)</h3>
      <MMenuItem class="w-full">
        <MTitle>{{ menuText }}</MTitle>
      </MMenuItem>
    </div>
    <div>
      <h3 class="text-ds-trunks text-14-ds">
        menu item (with radio button left)
      </h3>
      <MMenuItem class="w-full">
        <MTitle>{{ menuText }}</MTitle>
      </MMenuItem>
    </div>
    <div>
      <h3 class="text-ds-trunks text-14-ds">menu item (with checkbox left)</h3>
      <MMenuItem class="w-full">
        <MTitle>{{ menuText }}</MTitle>
      </MMenuItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import MTag from '@/components/tag/MTag.vue'
import MTitle from '@/components/menu-item/MTitle.vue'
import { ref } from 'vue'

const menuText = ref('Your value')
</script>
