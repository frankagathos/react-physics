import { NextPage } from 'next'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import { OrbitControls } from '@react-three/drei'

const PlainGeometry: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="React animated Logo component" />
      </Head>

      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.3}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <mesh>
          <planeBufferGeometry attach="geometry" args={[1, 1]} />
          <meshPhongMaterial attach="material" color="green" />
        </mesh>
      </Canvas>
    </>
  )
}

export default PlainGeometry
