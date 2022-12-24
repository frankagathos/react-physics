import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { NextPage } from 'next'
import * as THREE from 'three'
import { DoubleSide } from 'three'
import { Physics, useBox, usePlane } from '@react-three/cannon'
import { Trex } from './examples/t-rex'

function Plane({ ...props }: any) {
  const [ref] = usePlane(() => ({ ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <gridHelper args={[10, 10]} position={new THREE.Vector3(0, 0.5, 0)} />
      <planeBufferGeometry args={[50, 50]} />
      <meshPhongMaterial side={DoubleSide} color={'white'} />
    </mesh>
  )
}

const TrexMesh = () => {
  const [ref] = useBox(() => ({
    mass: 1,
    // isKinematic: true,
    args: [1, 1, 1],
    position: [0, 8, 0],
  }))
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
        // position: [0, 50, 50],
        position: [0, -16, 16],
        // rotation: new THREE.Euler(0, Math.PI / 2, 0),
        isPerspectiveCamera: true,
      }}
    >
      <Physics gravity={[0, 0, -10]}>
        <TrexMesh />
        <Plane />
      </Physics>
      <OrbitControls />
      <ambientLight intensity={0.8} />
    </Canvas>
  )
}

export default Game
