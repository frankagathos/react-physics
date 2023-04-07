import React, { SyntheticEvent, useRef, useState } from 'react'
import { extend, Canvas } from '@react-three/fiber'
//@ts-ignore
import { Text } from 'troika-three-text'
import fonts from '../fonts/fonts'
import styles from './Text3d.module.scss'

// Register Text as a react-three-fiber element
extend({ Text })

export default function Text3d({
  textCopy,
  fontSize,
}: {
  textCopy: string
  fontSize: number
}) {
  const [rotation, setRotation] = useState<[number, number, number, string]>([
    0,
    0,
    0,
    'XYZ',
  ])

  const [opts, setOpts] = useState({
    font: 'Orbitron',
    fontSize,
    color: '#99ccff',
    maxWidth: 250,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: 'center',
    materialType: 'MeshPhongMaterial',
  })
  const mesh = useRef<THREE.Mesh>(null!)

  const handleMouseMove = (e: any) => {
    // if (e.target.offsetHeight) {
    //   console.log(e.target.offsetHeight);
    // }

    setRotation([
      ((e.clientY / e.target.offsetHeight - 1) * -Math.PI) / 8,
      ((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 8,
      0,
      'XYZ',
    ])
  }

  return (
    <div className={styles.wrapper} onMouseMove={handleMouseMove}>
      <Canvas>
        <text
          position-z={-180}
          rotation={rotation}
          {...opts}
          // @ts-ignore
          text={textCopy}
          // @ts-ignore
          font={fonts[opts.font]}
          anchorX="center"
          anchorY="middle"
        >
          {opts.materialType === 'MeshPhongMaterial' ? (
            <meshPhongMaterial attach="material" color={opts.color} />
          ) : null}
        </text>

        <pointLight position={[-100, 0, -160]} />
        <pointLight position={[0, 0, -170]} />
        <pointLight position={[100, 0, -160]} />
      </Canvas>
    </div>
  )
}
