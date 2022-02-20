import { NextPage, NextPageContext } from 'next'
import React, { Suspense, useEffect, useRef } from 'react'
import { Heading, Text, Container } from '@chakra-ui/react'
import { Canvas } from '@react-three/fiber'
import Box from '../../components/objects/box'
import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import useEventListener from '../../hooks/useEventListener'

// Need start creating a shooting game

interface Props {}

const Shoot: NextPage<Props> = () => {
  const container = useRef()
  const pointer = new THREE.Vector2()
  // useEventListener(container, 'click', (e: any) => console.log('move'+e))
  return (
    <Container>
      {/* <Heading>Model</Heading> */}
      {/* <Text>model</Text> */}
      {/*  @ts-ignore */}
      <Canvas ref={container}>
        <Box position={[-1.2, 0, 0]} />
        <Box position={[0, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </Container>
  )
}

export default Shoot
