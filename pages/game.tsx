import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { NextPage } from 'next'
import * as THREE from 'three'
import { Physics } from '@react-three/cannon'
import { useState } from 'react'
import RectangularCuboid, {
  RectangularCuboidProps,
} from '../newObjectComponents/RectangularCuboid'

const Game: NextPage = () => {
  interface StateType {
    selectedObject: any
    plain: RectangularCuboidProps
    rectangles: RectangularCuboidProps[]
  }

  const initState: StateType = {
    selectedObject: null,
    plain: {
      position: [0, 0, 0],
      size: [50, 50, 1],
      rotation: [-Math.PI / 2, 0, 0],
      type: 'Static',
      color: 'white',
    },
    rectangles: [
      {
        uuid: '1',
        position: [0, 2, 0],
        size: [2, 1, 1],
        type: 'Dynamic',
        color: 'red',
      },
      {
        uuid: '2',
        position: [2, 2, 0],
        size: [2, 1, 1],
        type: 'Dynamic',
        color: 'red',
      },
      {
        uuid: '3',
        position: [5, 2, 0],
        size: [1, 1, 5],
        type: 'Static',
        color: 'red',
      },
    ],
  }

  const [state, setState] = useState(initState)
  const handleRectangleClick = (mesh: THREE.Object3D | undefined) => {
    setState((prevState) => ({ ...prevState, selectedObject: mesh }))
  }

  return (
    <Canvas
      shadows
      gl={{ alpha: false }}
      camera={{
        position: [0, 15, 25],
        isPerspectiveCamera: true,
      }}
    >
      <axesHelper position={new THREE.Vector3(0, 0, 0)} args={[5]} />
      <Physics gravity={[0, -10, 0]} debug>
        <RectangularCuboid
          position={state.plain.position}
          rotation={state.plain.rotation}
          size={state.plain.size}
          type={state.plain.type}
          color={state.plain.color}
        />
        {state?.rectangles.map((rect, index) => (
          <RectangularCuboid
            key={index}
            onClick={handleRectangleClick}
            position={rect.position}
            size={rect.size}
            controls={state?.selectedObject?.uuid === rect.uuid}
            type={rect.type}
            color={rect.color}
            uuid={rect.uuid}
          />
        ))}
      </Physics>
      <OrbitControls />
      <ambientLight intensity={0.8} />
    </Canvas>
  )
}

export default Game
