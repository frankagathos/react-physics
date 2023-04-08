import { NextPage } from 'next'
import React, { Suspense, useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Environment, OrbitControls } from '@react-three/drei'
import { TRexModel } from '../../components3D/TRex'
interface PageProps {}

const TRexPage: NextPage<PageProps> = () => {
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
        <TRexModel scale={0.3} />
        <Environment preset="sunset" background />
      </Suspense>
    </Canvas>
  )
}

export default TRexPage
