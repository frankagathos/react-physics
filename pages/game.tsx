import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { NextPage } from 'next'
import * as THREE from 'three'
import { Physics, useBox } from '@react-three/cannon'
import { useRef, useState } from 'react'
import RectangularCuboid, {
  RectangularCuboidProps,
} from '../newObjectComponents/RectangularCuboid'
import { button, useControls } from 'leva'
import generateUuid from '../utils/generateUuid'
import React from 'react'
import useCursorRaycaster from '../hooks/useCursorRaycaster'
import { Vector3 } from 'three'

const Game: NextPage = () => {
  function Plane() {
    const [ref] = useBox(() => ({
      type: 'Static',
      args: [150, 150, 0.5],
      rotation: [-Math.PI / 2, 0, 0],
    }))
    return (
      //@ts-ignore
      <mesh ref={ref}>
        <planeGeometry args={[150, 150, 1]} />
        <meshStandardMaterial color="white" side={THREE.DoubleSide} />
      </mesh>
    )
  }

  const { gravity } = useControls({
    gravity: { value: [0, -9.81, 0], step: 0.2 },
  })

  const handleAddBox = () => {
    setNewRects((prevRects) => [
      ...prevRects,
      {
        customId: generateUuid(),
        position: [0, 5, 0],
        size: [1, 1, 1],
        type: 'Dynamic',
        color: 'green',
      },
    ])
  }

  useControls({
    addCube: button(handleAddBox),
  })

  const [selectedObject, setSelectedObject] = useState<THREE.Object3D | null>(
    null,
  )
  const [newRects, setNewRects] = useState<RectangularCuboidProps[]>([
    {
      customId: '1',
      position: [0, 2, 0],
      size: [2, 1, 1],
      type: 'Dynamic',
      color: 'red',
    },
    {
      customId: '2',
      position: [2, 2, 0],
      size: [2, 1, 1],
      type: 'Dynamic',
      color: 'red',
    },
    {
      customId: '3',
      position: [5, 2, 0],
      size: [1, 1, 5],
      type: 'Dynamic',
      color: 'red',
    },
  ])

  const RollOverCube = () => {
    const [ref] = useBox(() => ({
      type: 'Static',
      args: [1, 1, 1],
    }))

    const mesh = useRef<THREE.Mesh>(null!)
    useCursorRaycaster(mesh)

    return (
      <mesh ref={mesh}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          map={new THREE.TextureLoader().load(
            'https://threejs.org/examples/textures/square-outline-textured.png',
          )}
        />
      </mesh>
    )
  }

  return (
    <>
      <Canvas
        shadows
        camera={{
          position: [0, 15, 25],
          isPerspectiveCamera: true,
        }}
      >
        <axesHelper position={new THREE.Vector3(0, 0, 0)} args={[5]} />
        <Physics gravity={gravity}>
          <RollOverCube />
          {newRects?.map((rect, index) => (
            <RectangularCuboid
              key={index}
              onClick={(mesh) => setSelectedObject(mesh)}
              position={rect.position}
              size={rect.size}
              isSelected={selectedObject?.userData.customId === rect.customId}
              type={rect.type}
              color={rect.color}
              customId={rect.customId}
            />
          ))}
          <Plane />
        </Physics>
        <OrbitControls />
        <ambientLight intensity={0.8} />
      </Canvas>
    </>
  )
}

export default Game
