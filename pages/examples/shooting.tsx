import { NextPage, NextPageContext } from 'next'
import React, { Suspense, useEffect, useRef } from 'react'
import { Heading, Text, Container } from '@chakra-ui/react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'

// Need start creating a shooting game

interface Props {}

const Shoot: NextPage<Props> = () => {
  const container = useRef()
  return (
    <Container>
      {/*  @ts-ignore */}
      <Canvas ref={container}>
        <ambientLight />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableDamping
          dampingFactor={0.1}
          autoRotate={false}
          rotateSpeed={-0.15}
        />
        {/* <mesh position={new THREE.Vector3(0, 10, 0)}>
          <gridHelper args={[10, 100]} />
          <meshPhongMaterial side={THREE.DoubleSide} attach="material" />
        </mesh> */}
        <mesh>
          <gridHelper
            args={[10,10]}
            position={new THREE.Vector3(0, 0.5, 0)}
          />
          <boxGeometry args={[10, 1, 10]} />
          <meshPhongMaterial side={THREE.DoubleSide} attach="material" />
        </mesh>
      </Canvas>
    </Container>
  )
}

export default Shoot
