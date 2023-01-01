import React, { Suspense, useState } from 'react'
import Head from 'next/head'
import { Billboard, OrbitControls } from '@react-three/drei'
import { Setup } from '../../components/Setup'

import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'

interface BillboardImage {
  url: string
  position: any
  args: any
}

const images: Array<BillboardImage> = [
  { url: '../messi.jpg', position: [5, 0, 0], args: [5, 5] },
  { url: '../messi3x2.jpg', position: [-5, 0, 0], args: [6, 4] },
  { url: '../messi3x2B.webp', position: [0, 0, 5], args: [6, 4] },
]

const MainPano = () => {
  const mainTexture = useLoader(THREE.TextureLoader, '../stadium360A.jpg')

  return (
    <mesh scale={[-1, 1, 1]}>
      <sphereBufferGeometry args={[700, 250, 140]} />
      <meshBasicMaterial map={mainTexture} side={THREE.BackSide} />
    </mesh>
  )
}
const Mesh = ({ url }: { url: string }) => {
  const mainTexture = useLoader(THREE.TextureLoader, url)

  return <meshBasicMaterial attach="material" map={mainTexture} />
}

const MyBillBoard = ({
  position,
  args,
  imageUrl,
}: {
  position: any
  args: any
  imageUrl: any
}) => {
  const follow = true
  const lockX = false
  const lockY = false
  const lockZ = false

  return (
    <Billboard
      position={position}
      args={args}
      material-color="white"
      follow={follow}
      lockX={lockX}
      lockY={lockY}
      lockZ={lockZ}
      removeFromParent={undefined}
    >
      <Suspense fallback={'Loading...'}>
        <Mesh url={imageUrl} />
      </Suspense>
    </Billboard>
  )
}

const LionelMessi = () => {
  return (
    <div>
      <Head>
        <meta name="description" content="Lionel Messi 3D image gallery" />
      </Head>

      <Setup controls={false} cameraPosition={new THREE.Vector3(0, 0, 10)}>
        {images.map((x, index) => (
          <MyBillBoard
            key={`${index}`}
            position={x.position}
            args={x.args}
            imageUrl={x.url}
          />
        ))}

        <Suspense fallback={'Loading pano...'}>
          <MainPano />
        </Suspense>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.3}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Setup>
    </div>
  )
}

export default LionelMessi
