import { useBox } from '@react-three/cannon'
import usePersonControls from '../hooks/usePersonControls'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import generateUuid from '../utils/generateUuid'

export interface RectangularCuboidProps {
  position: [number, number, number]
  rotation?: [number, number, number]
  isSelected?: boolean
  type?: 'Static' | 'Dynamic' | 'Kinematic'
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
  type,
  size = [1, 1, 1],
  color = 'white',
  customId = generateUuid(),
  onClick,
}: RectangularCuboidProps) => {
  const [ref, api] = useBox(() => ({
    mass: 10,
    position,
    rotation,
    args: size,
    type,
    userData: { customId },
  }))

  const SPEED = 5

  const { forward, backward, left, right, jump, downward } = usePersonControls()

  useFrame(() => {
    if (!isSelected || type === 'Static') return

    let frontVector = new THREE.Vector3(0, 0, 0)
    let sideVector = new THREE.Vector3(0, 0, 0)
    let direction = new THREE.Vector3(0, 0, 0)
    let downVector = new THREE.Vector3(0, 0, 0)

    downVector.set(0, Number(downward), 0)
    frontVector.set(0, 0, -Number(forward) + Number(backward))
    sideVector.set(-Number(right) + Number(left), 0, 0)

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)

    api.velocity.set(direction.x, direction.y, direction.z)
  })

  return (
    <mesh
      onClick={() => onClick?.(ref?.current)}
      // @ts-ignore
      ref={ref}
      castShadow
      receiveShadow
    >
      <boxBufferGeometry args={size} attach="geometry" />
      <meshLambertMaterial
        attach="material"
        color={isSelected ? 'blue' : color}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default RectangularCuboid
