import { NextPage } from 'next'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { Environment, OrbitControls } from '@react-three/drei'
import { useFBX } from '@react-three/drei'
interface PageProps {}

export const Trex = ({ ...props }) => {
  let fbx = useFBX('../trex.fbx')
  return <primitive {...props} object={fbx} castShadow receiveShadow />
}

const TRex: NextPage<PageProps> = () => {
  return (
    <Canvas
      style={{ minHeight: '100vh' }}
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
        <Trex position={new THREE.Vector3(0, 0.5, 0)} scale={0.1} />
        <Environment preset="sunset" background />
      </Suspense>
    </Canvas>
  )
}

export default TRex
