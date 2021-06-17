import * as THREE from 'three'
import React, { useState } from 'react'
import { Canvas, extend, } from '@react-three/fiber'
import { Physics, useBox, usePlane } from '@react-three/cannon'
import niceColors from 'nice-color-palettes'
import { Text } from "troika-three-text";
import fonts from '../fonts/fonts'
import { OrbitControls } from '@react-three/drei'

extend({ Text });

function Plane({ color, ...props }) {
  const [ref] = usePlane(() => ({ ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshPhongMaterial attach="material" color={color} />
    </mesh>
  )
}

function Box({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const [ref] = useBox(() => ({ mass: 1, args: [4, 4, 4], isKinematic: true, position }))
  const opts = {
    font: "Orbitron",
    fontSize: 0.7,
    color: "red",
    maxWidth: 200,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: "center",
    materialType: "MeshPhongMaterial"
  }
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={[4, 4, 4]} />
      <meshLambertMaterial attach="material" color="white" side={THREE.DoubleSide} />

      <text
        position-x={position[0]}
        position-y={position[1]}
        position-z={position[2] + 2.01}
        {...opts}
        text={'Welcome'}
        font={fonts[opts.font]}
        anchorX="center"
        anchorY="middle"
      >
        {opts.materialType === "MeshPhongMaterial" ? (
          <meshPhongMaterial attach="material" color={opts.color} />
        ) : null}
      </text>

      <text
        position-x={position[0]}
        position-y={position[1] - 2.01}
        position-z={position[2]}
        rotation={[Math.PI / 2, 0, 0, 'XYZ']}
        {...opts}
        text={'React'}
        font={fonts[opts.font]}
        anchorX="center"
        anchorY="middle"
      >
        {opts.materialType === "MeshPhongMaterial" ? (
          <meshPhongMaterial attach="material" color={opts.color} />
        ) : null}
      </text>

      <text
        position-x={position[0]}
        position-y={position[1]}
        position-z={position[2] - 2.1}
        rotation={[Math.PI, 0, 0, 'XYZ']}
        {...opts}
        text={'Physics'}
        font={fonts[opts.font]}
        anchorX="center"
        anchorY="middle"
      >
        {opts.materialType === "MeshPhongMaterial" ? (
          <meshPhongMaterial attach="material" color={opts.color} />
        ) : null}
      </text>

    </mesh>
  )
}

export default function Home() {

  return (
    <Canvas concurrent shadowMap sRGB gl={{ alpha: false }} camera={{ position: [0, -12, 16] }}>
      <OrbitControls
      zoomSpeed={0.8}
        enableZoom={true}
        enablePan={true}
        enableDamping
        dampingFactor={0.1}
      />
      <hemisphereLight intensity={0.35} />
      <spotLight position={[30, 0, 45]} angle={0.3} penumbra={1} intensity={2} castShadow shadow-mapSize-width={256} shadow-mapSize-height={256} />
      <pointLight position={[-30, 0, -30]} intensity={0.5} />
      <Physics gravity={[0, 0, -30]}>
        <Plane color={niceColors[17][4]} />
        <Plane color={niceColors[17][4]} position={[-15, 0, 0]} rotation={[0, 0.9, 0]} />
        <Plane color={niceColors[17][4]} position={[15, 0, 0]} rotation={[0, -0.9, 0]} />
        <Plane color={niceColors[17][4]} position={[0, 6, 0]} rotation={[0.9, 0, 0]} />
        <Plane color={niceColors[17][4]} position={[0, -10, 0]} rotation={[-0.9, 0, 0]} />
        <Box position={[0, 0, 0]} />
      </Physics>
    </Canvas>
  )
}
