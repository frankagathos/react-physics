import { NextPage } from 'next'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { Environment, OrbitControls } from '@react-three/drei'
import { useFBX } from '@react-three/drei'
interface PageProps {}

const Trex = () => {
  let fbx = useFBX('../trex.fbx')
  return (
    <primitive
      object={fbx}
      scale={0.1}
      position={new THREE.Vector3(0, 0.5, 0)}
    />
  )
}

const TRex: NextPage<PageProps> = () => {
  return (
    <Canvas
      camera={{
        position: new THREE.Vector3(-5, 4, 0),
      }}
    >
      <ambientLight />
      <OrbitControls />
      <mesh>
        <gridHelper args={[10, 10]} position={new THREE.Vector3(0, 0.5, 0)} />
        <boxGeometry args={[10, 1, 10]} />
        <meshPhongMaterial side={THREE.DoubleSide} attach="material" />
      </mesh>

      <Suspense fallback={null}>
        <Trex />
        <Environment preset="sunset" background />
      </Suspense>
    </Canvas>
  )
}

export default TRex
