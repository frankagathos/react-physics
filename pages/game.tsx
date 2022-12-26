import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { NextPage } from 'next'
import * as THREE from 'three'
import { DoubleSide } from 'three'
import { Physics, useBox, usePlane } from '@react-three/cannon'
import { Trex } from './examples/t-rex'
import usePersonControls from '../hooks/usePersonControls'

function Plane({ ...props }: any) {
  const [ref] = usePlane(() => ({
    type: 'Static',
    rotation: [Math.PI / 2, 0, 0],
    // fixedRotation: true,
    ...props,
  }))
  return (
    <mesh
      ref={ref}
      receiveShadow
      //  rotation={new THREE.Euler(Math.PI / 2, 0, 0)}
    >
      {/* <gridHelper args={[10, 10]} position={new THREE.Vector3(0, 0.5, 0)} /> */}
      <planeBufferGeometry args={[50, 50]} />
      <meshPhongMaterial side={DoubleSide} color={'white'} />
    </mesh>
  )
}

const TrexMesh = () => {
  const [ref, api] = useBox(() => ({
    // mass: 10,
    // isKinematic: true,
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

    downVector.set(0, -Number(downward), 0)
    frontVector.set(0, 0, Number(forward) - Number(backward))
    sideVector.set(Number(right) - Number(left), 0, 0)

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
  // useFrame(() => {

  // })

  return (
    <Canvas
      gl={{ alpha: false }}
      camera={{
        // position: [0, 50, 50],
        position: [0, 15, 25],
        // rotation: new THREE.Euler(0, Math.PI, 0),
        // rotation: [Math.PI / 2, 0, 0],
        isPerspectiveCamera: true,
        // rotateX:(camera)=> camera.rotation.set(deg2rad(30), 0, 0);
      }}
    >
      <axesHelper position={new THREE.Vector3(0, 0, 0)} args={[5]} />
      <Physics debug gravity={[0, 0, 0]}>
        <TrexMesh />
        <Plane />
      </Physics>
      <OrbitControls />
      <ambientLight intensity={0.8} />
    </Canvas>
  )
}

export default Game
