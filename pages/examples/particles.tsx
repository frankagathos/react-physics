import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// Create the sphere mesh
function Sphere(props: JSX.IntrinsicElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!)
  //   useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  return (
    <mesh {...props} ref={mesh} scale={0.01}>
      <sphereGeometry />
      <meshBasicMaterial reflectivity={2} color={'green'} />
    </mesh>
  )
}

// Spheres data
const spheresData: any[] = []
for (let i = 0; i < 150; i++) {
  spheresData.push({
    position: [Math.random(), Math.random(), Math.random()],
  })
}

export default function Spheres() {
  return (
    <>
      <Head>
        <meta name="description" content="spheres with three.js" />
      </Head>

      <Canvas>
        <OrbitControls
          zoomSpeed={0.8}
          enableZoom={true}
          enablePan={true}
          enableDamping
          dampingFactor={0.1}
        />
        <ambientLight />
        <pointLight position={[5, 10, 10]} />
        {spheresData.map((sphere: any, index: number) => (
          <Sphere key={`${index}`} position={sphere.position} />
        ))}
      </Canvas>
    </>
  )
}
