import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { OrbitControls } from '@react-three/drei'
import { NextPage } from 'next'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'

const Earth: NextPage = () => {
  const Earth = () => {
    const mesh = useRef<THREE.Mesh>(null)
    useFrame((state, delta) => {
      if (!mesh.current) return
      mesh.current.rotation.y -= 0.0015
    })
    const mainTexture = useLoader(THREE.TextureLoader, '../earthmap1k.jpg')
    const bumpMap = useLoader(THREE.TextureLoader, '../earthbump.jpg')
    return (
      <mesh ref={mesh}>
        <meshPhongMaterial
          map={mainTexture}
          bumpMap={bumpMap}
          bumpScale={0.3}
        />
        <sphereGeometry args={[0.6, 32, 32]} />
      </mesh>
    )
  }

  const Clouds = () => {
    const mesh = useRef<THREE.Mesh>(null)
    useFrame((state, delta) => {
      if (!mesh.current) return
      mesh.current.rotation.y -= 0.001
    })
    const mainTexture = useLoader(THREE.TextureLoader, '../earthCloud.png')
    return (
      <mesh ref={mesh}>
        <meshPhongMaterial map={mainTexture} transparent />
        <sphereGeometry args={[0.63, 32, 32]} />
      </mesh>
    )
  }

  const Galaxy = () => {
    const mesh = useRef<THREE.Mesh>(null)
    useFrame((state, delta) => {
      if (!mesh.current) return
      mesh.current.rotation.y -= 0.0001
    })
    const mainTexture = useLoader(THREE.TextureLoader, '../galaxy.png')

    return (
      <mesh ref={mesh}>
        <meshBasicMaterial
          side={THREE.BackSide}
          map={mainTexture}
          transparent
        />
        <sphereGeometry args={[80, 64, 64]} />
      </mesh>
    )
  }

  const [aspect, setAspect] = useState<number>(1)

  useEffect(() => {
    setAspect(window.innerWidth / window.innerHeight)
  }, [])

  return (
    <div style={{ width: '100%', height: '100vh', background: 'black' }}>
      <Canvas
        camera={{
          fov: 60,
          aspect,
          near: 0.1,
          far: 5000,
          isPerspectiveCamera: true,
          position: [0, 0, 2],
        }}
      >
        <OrbitControls />
        <ambientLight intensity={0.8} />
        <pointLight intensity={1} position={[0, 6, 0]} />
        <Earth />
        <Clouds />
        <Galaxy />
      </Canvas>
    </div>
  )
}
export default Earth
