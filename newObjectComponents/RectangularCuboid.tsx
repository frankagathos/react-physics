import { useBox } from '@react-three/cannon'
import usePersonControls from '../hooks/usePersonControls'
import generateUuid from '../utils/generateUuid'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export interface RectangularCuboidProps {
  position: number[]
  rotation?: number[]
  controls?: boolean
  type?: 'Static' | 'Dynamic' | 'Kinematic'
  size?: any // [number,number,number]
  onClick?: (mesh: THREE.Object3D | undefined) => void
  uuid?: string
  color?: string
  isSelected?: boolean
}
const RectangularCuboid = ({
  position,
  rotation = [0, 0, 0],
  controls = false,
  type,
  size = [1, 1, 1],
  color = 'white',
  uuid = generateUuid(),
  onClick,
}: RectangularCuboidProps) => {
  const [ref, api] = useBox(() => ({
    mass: 1,
    position,
    rotation,
    isKinematic: true,
    args: size,
    type,
    uuid,
  }))

  const SPEED = 5

  const { forward, backward, left, right, jump, downward } = usePersonControls()

  useFrame(() => {
    if (!controls || type === 'Static') return

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
      onClick={() => onClick?.(ref.current)}
      ref={ref}
      castShadow
      receiveShadow
      uuid={uuid}
    >
      <boxBufferGeometry args={size} attach="geometry" />
      <meshLambertMaterial
        attach="material"
        color={controls ? 'blue' : color}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default RectangularCuboid
