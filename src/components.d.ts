import MIcon from '@/components/icons/MIcon.vue'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    MIcon: typeof MIcon
  }
}
export {}
