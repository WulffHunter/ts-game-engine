import { Component } from 'engine/component'

export class Entity {
  components: Array<Component> = []

  constructor() {
    this.components = []
  }

  with<C extends Component>(component: C): Entity {
    this.components.push(component)
    return this
  }

  bind(): Array<Component> {
    return this.components
  }
}