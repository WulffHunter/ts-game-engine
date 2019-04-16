import { Component } from 'engine/component'

type ComponentsMap = Partial<Record<T, Array<Component<T>>>>

export enum SystemType {
  INPUT,
  STEP,
  RENDER,
}

export type InputSystem<T> = {
  type: SystemType.INPUT
  requiredComponents: Array<T>,
  system: (components: ComponentsMap, inputEvent: {}) => void,
}

export type StepSystem<T> = {
  type: SystemType.STEP
  requiredComponents: Array<T>,
  system: (components: ComponentsMap) => void,
}

export type RenderSystem<T> = {
  type: SystemType.RENDER
  requiredComponents: Array<T>,
  system: (components: ComponentsMap, timeElapsed: number) => void,
}

export type System<T> =
  | InputSystem<T>
  | StepSystem<T>
  | RenderSystem<T>