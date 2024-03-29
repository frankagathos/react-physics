import * as React from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import styles from './setup.module.scss'

export function Setup({
  children,
  cameraFov = 75,
  cameraPosition = new THREE.Vector3(-5, 5, 5),
  controls = true,
  lights = true,
  ...restProps
}: {
  children?: React.ReactNode
  cameraFov?: number
  cameraPosition?: any
  controls?: any
  lights?: boolean
  restProps?: any
}) {
  if (typeof window !== 'undefined') {
    return (
      <Canvas
        className={styles.canvas}
        shadows
        camera={{ position: cameraPosition, fov: cameraFov }}
        // dpr={window.devicePixelRatio || 1}
        {...restProps}
      >
        {children}
        {lights && (
          <>
            <ambientLight intensity={0.8} />
            <pointLight intensity={1} position={[0, 6, 0]} />
          </>
        )}
        {controls && <OrbitControls />}
      </Canvas>
    )
  } else {
    return null
  }
}
