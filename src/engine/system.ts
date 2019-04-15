import { Component, ComponentType } from 'engine/component'

enum SystemType {
  
}

export const createSystem = (
  t: SystemType,
  requiredComponents: Array<ComponentType>,
  system: (...components: Array<Component>) => void,
): System => ({
  type: t,
  requiredComponents,
  system,
})

export interface System {
  type: SystemType
  requiredComponents: Array<ComponentType>,
  system: (...components: Array<Component>) => void,
}