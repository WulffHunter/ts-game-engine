import { Component } from 'engine/component'

export class Entity<T> {
  components: Array<Component<T>> = []

  constructor() {
    this.components = []
  }

  with<C extends Component<T>>(component: C): Entity {
    this.components.push(component)
    return this
  }

  bind(): Array<Component<T>> {
    return this.components
  }
}