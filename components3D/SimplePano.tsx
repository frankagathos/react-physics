import * as THREE from 'three'
import React, { Suspense } from 'react'
import { useLoader, Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { NextPage } from 'next'
import styles from './simplePano.module.scss'
interface Props {
  autoRotate: boolean
}

const MainPano = () => {
  const mainTexture = useLoader(THREE.TextureLoader, '../panorama.jpg')

  return (
    <mesh scale={[-1, 1, 1]}>
      <sphereBufferGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={mainTexture} side={THREE.BackSide} />
    </mesh>
  )
}

const SimplePanorama: NextPage<Props> = ({ autoRotate }) => {
  return (
    <div className={styles.room}>
      <Canvas camera={{ fov: 55, position: [0, 0, 0.1] }}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.1}
          autoRotate={autoRotate}
        />
        <Suspense fallback={'Loading pano...'}>
          <MainPano />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default SimplePanorama
