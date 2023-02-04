import * as THREE from 'three'
import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import { Canvas, extend } from '@react-three/fiber'
import { Physics, useBox, usePlane } from '@react-three/cannon'
import niceColors from 'nice-color-palettes'
// @ts-ignore
import { Text } from 'troika-three-text'
import fonts from '../fonts/fonts'
import { OrbitControls } from '@react-three/drei'
import { useRouter } from 'next/router'
import { ThreeEvent } from '@react-three/fiber/dist/declarations/src/core/events'
import styles from '../components/setup.module.scss'
import Head from 'next/head'
import { Container, Heading, Text as ChakraText } from '@chakra-ui/react'
extend({ Text })

// @ts-ignore
function Plane({ color, ...props }) {
  const [ref] = usePlane(() => ({ ...props }!))
  return (
    // @ts-ignore
    <mesh ref={ref} receiveShadow>
      <planeGeometry attach="geometry" args={[1000, 1000]} />
      <meshPhongMaterial attach="material" color={color} />
    </mesh>
  )
}

function Box({
  position = [0, 0, 0],
  onClick,
}: {
  position?: [number, number, number]
  onClick: (event: ThreeEvent<MouseEvent>) => void
}) {
  const [ref] = useBox(() => ({
    mass: 1,
    args: [4, 4, 4],
    isKinematic: true,
    position,
  }))
  const opts = {
    font: 'Orbitron',
    fontSize: 0.7,
    color: 'red',
    maxWidth: 200,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: 'center',
    materialType: 'MeshPhongMaterial',
  }
  const [hovered, setHover] = useState(false)

  useEffect(() => {
    hovered
      ? (document.body.style.cursor = 'pointer')
      : (document.body.style.cursor = 'default')
  }, [hovered])

  return (
    <mesh
      //@ts-ignore
      ref={ref}
      castShadow
      receiveShadow
      onClick={onClick}
      scale={hovered ? 1.5 : 1}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry attach="geometry" args={[4, 4, 4]} />
      <meshLambertMaterial
        attach="material"
        color="white"
        side={THREE.DoubleSide}
      />

      <text
        position-x={position[0]}
        position-y={position[1]}
        position-z={position[2] + 2.01}
        {...opts}
        // @ts-ignore
        text={'Welcome'}
        // @ts-ignore
        font={fonts[opts.font]}
        anchorX="center"
        anchorY="middle"
      >
        {opts.materialType === 'MeshPhongMaterial' ? (
          <meshPhongMaterial attach="material" color={opts.color} />
        ) : null}
      </text>

      <text
        position-x={position[0]}
        position-y={position[1] - 2.01}
        position-z={position[2]}
        rotation={[Math.PI / 2, 0, 0, 'XYZ']}
        {...opts}
        // @ts-ignore
        text={'React'}
        // @ts-ignore
        font={fonts[opts.font]}
        anchorX="center"
        anchorY="middle"
      >
        {opts.materialType === 'MeshPhongMaterial' ? (
          <meshPhongMaterial attach="material" color={opts.color} />
        ) : null}
      </text>

      <text
        position-x={position[0]}
        position-y={position[1]}
        position-z={position[2] - 2.1}
        rotation={[Math.PI, 0, 0, 'XYZ']}
        {...opts}
        // @ts-ignore
        text={'Physics'}
        // @ts-ignore
        font={fonts[opts.font]}
        anchorX="center"
        anchorY="middle"
      >
        {opts.materialType === 'MeshPhongMaterial' ? (
          <meshPhongMaterial attach="material" color={opts.color} />
        ) : null}
      </text>
    </mesh>
  )
}

export default function BoxAnimation() {
  const router = useRouter()
  return (
    <>
      <Head>
        <meta
          name="description"
          content="React three fiber maintained examples. Learn how to add Three.js scenes in React.js by examples."
        />
      </Head>
      <Container>
        <Heading>Welcome to React Physics</Heading>
        <ChakraText>
          Your place for well maintained examples of 3D scenes built with React
          three fiber.
        </ChakraText>
      </Container>
      <Canvas
        className={styles.canvas}
        gl={{ alpha: false }}
        camera={{ position: [0, -12, 16] }}
      >
        <OrbitControls
          zoomSpeed={0.8}
          enableZoom={true}
          enablePan={true}
          enableDamping
          dampingFactor={0.1}
        />
        <hemisphereLight intensity={0.35} />
        <spotLight
          position={[30, 0, 45]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
          shadow-mapSize-width={256}
          shadow-mapSize-height={256}
        />
        <pointLight position={[-30, 0, -30]} intensity={0.5} />
        <Physics gravity={[0, 0, -30]}>
          <Plane color={niceColors[17][4]} />
          <Plane
            color={niceColors[17][4]}
            position={[-15, 0, 0]}
            rotation={[0, 0.9, 0]}
          />
          <Plane
            color={niceColors[17][4]}
            position={[15, 0, 0]}
            rotation={[0, -0.9, 0]}
          />
          <Plane
            color={niceColors[17][4]}
            position={[0, 6, 0]}
            rotation={[0.9, 0, 0]}
          />
          <Plane
            color={niceColors[17][4]}
            position={[0, -10, 0]}
            rotation={[-0.9, 0, 0]}
          />
          <Box onClick={() => Router.push('/examples')} position={[0, 0, 0]} />
        </Physics>
      </Canvas>
    </>
  )
}
