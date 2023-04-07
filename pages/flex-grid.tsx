import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import styles from '../components3D/setup.module.scss'
import Head from 'next/head'
import { Flex, Box as BoxFlex } from '@react-three/flex'
import Box from '../components3D/Box'
import { useAspect } from '@react-three/drei'
import { EarthGroup } from './earth'
import { useRouter } from 'next/router'
import { MainPano } from '../components3D/SimplePano'
import Text3d from '../components3D/Text3d'

const state = {
  top: 0,
  pages: 3,
}

const Layout = () => {
  const group = useRef(null)
  const { size } = useThree()
  const [vpWidth, vpHeight] = useAspect(size.width, size.height)
  // const vec = new THREE.Vector3()

  // useFrame(() => {
  //   if (!group.current) return
  //   //@ts-ignore
  //   group.current.position.lerp(
  //     vec.set(-size.width / 2, state.top + 8, -10),
  //     0.1,
  //   )
  // })
  useEffect(() => {
    console.log('SIZE', size)
    console.log('VP HEIGHT', vpHeight)
    if (window) {
      console.log('GROUP', group)
      //@ts-ignore
      // group.current.position.set(vec.set(, 0, 1), 0.1)
      group.current.position.x = -vpWidth / 2
      //@ts-ignore
      group.current.position.y = vpHeight / 2
    }
    // group.current.position
  }, [])

  const router = useRouter()
  const handleClick = (url: string) => router.push(url)

  return (
    <group ref={group} position={[0, 0, 0]}>
      <Flex
        padding={1}
        size={[vpWidth, 0, 0]}
        removeFromParent={undefined}
        dir="row"
        flexWrap="wrap"
      >
        {new Array(10).fill(0).map((x, i) => (
          <BoxFlex
            key={i}
            onClick={() => handleClick('./examples/cubes')}
            margin={0.5}
            centerAnchor
            removeFromParent={undefined}
          >
            <Box />
          </BoxFlex>
        ))}
        <BoxFlex
          onClick={() => handleClick('./earth')}
          margin={0.5}
          centerAnchor
          removeFromParent={undefined}
        >
          <EarthGroup renderGalaxy={false} />
        </BoxFlex>

        <BoxFlex
          onClick={() => handleClick('./examples/cubes')}
          margin={0.5}
          centerAnchor
          removeFromParent={undefined}
        >
          <Box />
        </BoxFlex>

        <BoxFlex
          onClick={() => handleClick('./earth')}
          margin={0.5}
          centerAnchor
          removeFromParent={undefined}
        >
          <EarthGroup renderGalaxy={false} />
        </BoxFlex>
      </Flex>
    </group>
  )
}

export default function IndexPage() {
  // const router = useRouter()

  return (
    <>
      <Head>
        <meta
          name="description"
          content="React three fiber maintained examples. Learn how to add Three.js scenes in React.js by examples."
        />
      </Head>
      <div style={{ cursor: 'pointer' }}>
        <Canvas
          className={styles.canvas}
          gl={{
            powerPreference: 'high-performance',
            alpha: false,
            antialias: true,
            stencil: false,
            depth: false,
          }}
          camera={{
            position: [0, 0, 10],
          }}
        >
          <ambientLight intensity={0.8} />
          <pointLight intensity={1} position={[0, 6, 0]} />

          <Layout />
        </Canvas>
      </div>
    </>
  )
}
