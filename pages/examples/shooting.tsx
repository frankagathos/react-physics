import { NextPage, NextPageContext } from 'next'
import React, { Suspense, useEffect, useRef } from 'react'
import { Heading, Text, Container } from '@chakra-ui/react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { useFBX } from '@react-three/drei'
interface Props {}

const Trex = () => {
  // had to use useFBX from drei
  let fbx = useFBX('../trex.fbx')
  return (
    <primitive object={fbx} scale={0.1} position={new THREE.Vector3(0, 0.5, 0)} />
  )
}

const Shoot: NextPage<Props> = () => {
  const container = useRef()
  return (
    <Container>
      {/*  @ts-ignore */}
      <Canvas ref={container}>
        <ambientLight />
        {/* <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableDamping
          dampingFactor={0.1}
          autoRotate={false}
          rotateSpeed={-0.15}
        /> */}

        <OrbitControls />
        <mesh>
          <gridHelper args={[10, 10]} position={new THREE.Vector3(0, 0.5, 0)} />
          <boxGeometry args={[10, 1, 10]} />
          <meshPhongMaterial side={THREE.DoubleSide} attach="material" />
        </mesh>

        <Suspense fallback={null}>
          <Trex />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </Container>
  )
}

export default Shoot
