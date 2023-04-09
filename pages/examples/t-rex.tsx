import { NextPage } from 'next'
import React, { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Environment, OrbitControls } from '@react-three/drei'
import { TRexModel } from '../../components3D/TRex'
import { Physics, usePlane } from '@react-three/cannon'
import Box from '../../components3DPhysics/Box'
interface PageProps {}

const TRexPage: NextPage<PageProps> = () => {
  return (
    <Canvas
      style={{ minHeight: '100vh' }}
      camera={{
        position: new THREE.Vector3(-5, 50, 0),
      }}
    >
      <ambientLight />
      <OrbitControls />
      <Physics gravity={[0, -100, 0]}>
        <Box />
        <Suspense fallback={null}>
          <TRexModel scale={1} />
          <Environment preset="sunset" background />
        </Suspense>
      </Physics>
    </Canvas>
  )
}

export default TRexPage
