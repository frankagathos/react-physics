import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { NextPage } from 'next'
import * as THREE from 'three'
import { DoubleSide } from 'three'
import { Physics, useBox } from '@react-three/cannon'
import { Trex } from './examples/t-rex'
import usePersonControls from '../hooks/usePersonControls'

function BoxPlane({ ...props }: any) {
  const [ref] = useBox(() => ({
    type: 'Static',
    rotation: [-Math.PI / 2, 0, 0],
    args: [50, 50, 1],
    ...props,
  }))
  return (
    <mesh ref={ref} receiveShadow>
      <boxBufferGeometry args={[50, 50, 1]} attach="geometry" />
      <meshLambertMaterial attach="material" color="white" />
    </mesh>
  )
}

const TrexMesh = () => {
  const [ref, api] = useBox(() => ({
    mass: 1,
    isKinematic: true,
    args: [1, 1, 1],
    position: [0, 5, 0],
    type: 'Dynamic',
  }))

  const SPEED = 5

  const { forward, backward, left, right, jump, downward } = usePersonControls()

  useFrame(() => {
    // Calculating front/side movement ...
    let frontVector = new THREE.Vector3(0, 0, 0)
    let sideVector = new THREE.Vector3(0, 0, 0)
    let direction = new THREE.Vector3(0, 0, 0)
    let downVector = new THREE.Vector3(0, 0, 0)
    let frontSideVector = new THREE.Vector3(0, 0, 0)

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
    <mesh ref={ref} castShadow receiveShadow>
      <boxBufferGeometry args={[1, 1, 1]} attach="geometry" />
      <meshLambertMaterial
        attach="material"
        color="red"
        side={THREE.DoubleSide}
      />
      {/* <Trex scale={0.01} /> */}
    </mesh>
  )
}

const Game: NextPage = () => {
  return (
    <Canvas
      gl={{ alpha: false }}
      camera={{
        position: [0, 15, 25],
        isPerspectiveCamera: true,
      }}
    >
      <axesHelper position={new THREE.Vector3(0, 0, 0)} args={[5]} />
      <Physics gravity={[0, -100, 0]} debug>
        <TrexMesh />
        <BoxPlane />
      </Physics>
      <OrbitControls />
      <ambientLight intensity={0.8} />
    </Canvas>
  )
}

export default Game
