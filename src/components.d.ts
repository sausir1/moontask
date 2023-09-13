import MIcon from '@/components/icons/MIcon.vue'
declare module '@vue/runtime-core' {
  // Vue >= 2.7
  // declare module '@vue/runtime-dom' {  // Vue <= 2.6.14
  export interface GlobalComponents {
    MIcon: typeof MIcon
  }
}
export {}
