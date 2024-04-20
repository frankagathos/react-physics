export type CustomObjectType = 'cuboid' | 'model'

export interface GenericObject {
  customId?: string
  customType: CustomObjectType
  position: [number, number, number]
  type?: 'Static' | 'Dynamic' | 'Kinematic' // This is for physics
}

export interface Cuboid extends GenericObject {
  size: [number, number, number]
  color?: string
}

export interface Model3d extends GenericObject {
  modelUrl: string
  scale: 0.1
}

export type CustomObject = Cuboid | Model3d
export type CustomObjects = CustomObject[]
