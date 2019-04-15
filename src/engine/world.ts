import { Component, ComponentType } from 'engine/component'

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

export class World {
  // An incrementer to ensure every entity has a unique id
  entityIncrementer: number

  // A map of all the components in their storage
  components: Record<ComponentType, Array<Component>>

  constructor() {
    this.entityIncrementer = 0
    this.components = {}
  }

  add(boundEntity: Array<Component>) {
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
    this.entityIncrementer++
  }
}