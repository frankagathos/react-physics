import { Stars } from '@react-three/drei'
import { ReactElement, Suspense } from 'react'
import { Setup } from './Setup'
import { extend } from '@react-three/fiber'
//@ts-ignorets-ignore
import { Text } from 'troika-three-text'
import fonts from '../fonts/fonts'
import { Vector3, DoubleSide } from 'three'

/**
 * Stars scene
 *
 *
 */

const StarsScene = ({
  count,
  textCopy,
}: {
  count: number
  textCopy?: string | string[]
}) => {
  extend({ Text })

  const opts = {
    font: 'Orbitron',
    fontSize: 1,
    color: '#045206',
    maxWidth: 250,
    lineHeight: 2,
    letterSpacing: 0,
    textAlign: 'center',
  }
  return (
    <Setup controls={true} cameraPosition={new Vector3(0, 0, 10)}>
      <Suspense fallback={null}>
        <Stars
          radius={100}
          depth={50}
          factor={3}
          saturation={0}
          fade
          count={count}
        />
        {textCopy && (
          <text
            position-z={1}
            {...opts}
            //@ts-ignore
            text={textCopy + '\n' + count + ' stars'}
            //@ts-ignore
            font={fonts[opts.font]}
            anchorX="center"
            anchorY="middle"
          >
            <meshPhongMaterial
              attach="material"
              side={DoubleSide}
              color={opts.color}
            />
          </text>
        )}
      </Suspense>
    </Setup>
  )
}

export default StarsScene
