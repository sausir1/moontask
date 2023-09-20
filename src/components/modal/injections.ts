import type { ComputedRef, InjectionKey } from 'vue'

export interface StateContext {
  size: ComputedRef<string>
  closeModal: () => void
}

export const modalKey: InjectionKey<StateContext> = Symbol('m-modal-state')
