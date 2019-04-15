// This type is intended for enum use
// All the possible components should be represented
// via enum.
export type ComponentType = number | string

export class Component {
  type: ComponentType

  constructor(type: ComponentType) {
    this.type = type
  }

  getType() {
    return this.type
  }
}