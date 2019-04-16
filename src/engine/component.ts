// This type is intended for enum use
// All the possible components should be represented
// via enum.
export type ComponentType = number | string

export class Component<T extends ComponentType> {
  type: T

  constructor(type: T) {
    this.type = type
  }

  getType(): T {
    return this.type
  }
}