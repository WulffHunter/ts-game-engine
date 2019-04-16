import { Component } from 'engine/component'
import {
  InputSystem,
  StepSystem,
  RenderSystem,
  SystemType,
  System,
} from 'engine/system'

// export const world = () => {
// 	return {
// 		entities: [],
// 		push: (entity) => {
// 			for (var i = 0; i < entities.length(); i++) {
// 				if (entities[i] === null) {
// 					entities[i] = entity;
// 					return i;
// 				}
// 			}
// 			entities.push(entity);
// 			return entities.length - 1;
// 		},
// 		remove: (id) => {
// 			entities[id] = null;
// 		}
// 		input: (pageInfo, eventInfo) => {
// 			entities.forEach((e) => {
// 				e.event.input(pageInfo, eventInfo);
// 			});
// 		},
// 		step: (pageInfo) => {
// 			entities.forEach((e) => {
// 				e.event.step(pageInfo);
// 			});
// 		},
// 		render: (context) => {
// 			entities.forEach((e) => {
// 				e.event.render(context);
// 			});
// 		},
// 		type: () => {
// 			return "world";
// 		}
// 	}
// }

interface SystemMap<T> {
  [ SystemType.INPUT ]: Array<InputSystem<T>>
  [ SystemType.STEP ]: Array<StepSystem<T>>
  [ SystemType.RENDER ]: Array<RenderSystem<T>>
}

export class World<C> {
  // An incrementer to ensure every entity has a unique id
  entityIncrementer: number

  // A map of all the components in their storage
  components: Partial<Record<C, Array<Component<C>>>>
  systems: SystemMap<C>

  constructor() {
    this.entityIncrementer = 0

    this.components = {}

    this.systems = {
      [ SystemType.INPUT ]: [],
      [ SystemType.STEP ]: [],
      [ SystemType.RENDER ]: [],
    }
  }

  add(boundEntity: Array<Component<C>>): World {
    // Add all the new components to the world
    boundEntity.forEach(c => {
      const ctype = c.getType()

      // If there are no components of the given type yet,
      // create a new array
      if (!this.components[ctype]) {
        this.components[ctype] = []
      }

      // Add the component into the index of the current entity
      this.components[ctype][this.entityIncrementer] = c
    })

    // Increment the amount of entities that have been used
    this.entityIncrementer++

    // Make the function chainable
    return this
  }

  // Ads a system to a world. Must be done in-order.
  bindSystem(type: SystemType, system: System<T>): World {
    this.systems[type].push(system)

    // Make it chainable
    return this
  }

  executeSystems(type: SystemType) {

  }
}