import * as THREE from 'three'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics, useBox, usePlane } from '@react-three/cannon'
import niceColors from 'nice-color-palettes'


function Plane({ color, ...props }) {
  const [ref] = usePlane(() => ({ ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshPhongMaterial attach="material" color={color} />
    </mesh>
  )
}

function Box() {
  const [ref, api] = useBox(() => ({ mass: 1, args: [4, 4, 4], isKinematic: true }))
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={[4, 4, 4]} />
      <meshLambertMaterial attach="material" color="white" side={THREE.DoubleSide} />
    </mesh>
  )
}

export default function Home() {

  return (
    <Canvas concurrent shadowMap sRGB gl={{ alpha: false }} camera={{ position: [0, -12, 16] }}>
      <hemisphereLight intensity={0.35} />
      <spotLight position={[30, 0, 45]} angle={0.3} penumbra={1} intensity={2} castShadow shadow-mapSize-width={256} shadow-mapSize-height={256} />
      <pointLight position={[-30, 0, -30]} intensity={0.5} />
      <Physics gravity={[0, 0, -30]}>
        <Plane color={niceColors[17][4]} />
        <Plane color={niceColors[17][4]} position={[-15, 0, 0]} rotation={[0, 0.9, 0]} />
        <Plane color={niceColors[17][4]} position={[15, 0, 0]} rotation={[0, -0.9, 0]} />
        <Plane color={niceColors[17][4]} position={[0, 6, 0]} rotation={[0.9, 0, 0]} />
        <Plane color={niceColors[17][4]} position={[0, -10, 0]} rotation={[-0.9, 0, 0]} />
        <Box />
      </Physics>
    </Canvas>
  )
}
