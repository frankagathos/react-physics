import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import generateUuid from '../utils/generateUuid'

export interface RectangularCuboidProps {
  position: [number, number, number]
  rotation?: [number, number, number]
  isSelected?: boolean
  size?: [number, number, number]
  onClick?: (mesh: THREE.Object3D | null) => void
  customId?: string
  customType?: 'cuboid' | 'model' // THIS IS NOT USED JUST LAZY TO ADD THE TYPE BELOTFT
  color?: string
}
const RectangularCuboid = ({
  position,
  rotation = [0, 0, 0],
  isSelected = false,
  size = [1, 1, 1],
  color = 'white',
  onClick,
}: RectangularCuboidProps) => {
  const SPEED = 5

  return (
    <mesh
      // onClick={() => onClick?.(ref?.current)}
      // ref={ref}
      castShadow
      receiveShadow
      position={position}
      rotation={rotation}
    >
      <boxGeometry args={size} attach="geometry" />
      <meshLambertMaterial
        attach="material"
        color={isSelected ? 'blue' : color}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default RectangularCuboid
