import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Button } from '@chakra-ui/react'

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

export default function Spheres() {
  // Spheres data
  const getSpheresPositions = () => {
    const spheresData: any[] = []
    for (let i = 0; i < 150; i++) {
      spheresData.push({
        position: [Math.random(), Math.random(), Math.random()],
      })
    }
    return spheresData
  }
  const [spherePositions, setSpherePositions] = useState(getSpheresPositions())
  return (
    <>
      <Head>
        <meta name="description" content="spheres with three.js" />
      </Head>

      <Button
        colorScheme="blue"
        zIndex={1}
        right={25}
        top={150}
        position={'absolute'}
        onClick={() => setSpherePositions(getSpheresPositions())}
      >
        Change positions
      </Button>
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
        {getSpheresPositions().map((sphere: any, index: number) => (
          <Sphere key={`${index}`} position={sphere.position} />
        ))}
      </Canvas>
    </>
  )
}
