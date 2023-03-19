import { OrbitControls, useFBX } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { NextPage } from 'next'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import RectangularCuboid from '../newObjectComponents/RectangularCuboid'
import { button, useControls } from 'leva'
import generateUuid from '../utils/generateUuid'
import React from 'react'
import useCursorRaycaster from '../hooks/useCursorRaycaster'
import useEventListener from '../hooks/useEventListener'
import { Cuboid, CustomObject, CustomObjects, Model3d } from '../types'
import Model from '../newObjectComponents/Model'

const Game: NextPage = () => {
  function Plane() {
    return (
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[150, 150, 1]} />
        <meshStandardMaterial color="white" side={THREE.DoubleSide} />
      </mesh>
    )
  }

  // CONTROLS
  useControls({
    add_Model: button(() =>
      setObjToAdd({
        customId: generateUuid(),
        customType: 'model',
        position: [10, 2, 0],
        modelUrl: '../trex.fbx',
        scale: 0.1,
      }),
    ),
    add_Box: button(() =>
      setObjToAdd({
        customId: generateUuid(),
        customType: 'cuboid',
        position: [0, 0, 0],
        size: [1, 1, 1],
        type: 'Static',
        color: 'black',
      }),
    ),
  })

  const handleAddObject = (objToAdd: CustomObject) => {
    setRenderObjs((objs) => [...objs, objToAdd])
  }

  const [selectedObject, setSelectedObject] = useState<THREE.Object3D | null>(
    null,
  )

  const [renderObjs, setRenderObjs] = useState<CustomObjects>([
    {
      customId: generateUuid(),
      customType: 'cuboid', //For example walls
      position: [0, 2, 0],
      size: [2, 1, 1],
      type: 'Dynamic',
      color: 'yellow',
    },
    {
      customId: generateUuid(),
      customType: 'cuboid',
      position: [2, 2, 0],
      size: [2, 1, 1],
      type: 'Dynamic',
      color: 'red',
    },
    {
      customId: generateUuid(),
      customType: 'cuboid',
      position: [5, 2, 0],
      size: [1, 1, 5],
      type: 'Dynamic',
      color: 'red',
    },
    {
      customId: generateUuid(),
      customType: 'model',
      position: [10, 2, 0],
      modelUrl: '../trex.fbx',
      scale: 0.1,
    },
  ])

  const [objToAdd, setObjToAdd] = useState<CustomObject | null>({
    customId: generateUuid(),
    customType: 'cuboid',
    position: [0, 0, 0],
    size: [1, 1, 1],
    type: 'Static',
    color: 'green',
  })

  const AddObject = ({
    object,
    onClick,
  }: {
    object: CustomObject
    onClick: (object: CustomObject) => void
  }) => {
    const mesh = useRef<THREE.Mesh>(null!)
    const position = useCursorRaycaster(mesh)

    let fbx = useFBX('../trex.fbx')

    useEventListener('pointerdown', () =>
      onClick({
        ...object,
        position: [
          position?.current?.x || 0,
          position?.current?.y || 0,
          position?.current?.z || 0,
        ],
      }),
    )

    if (object.customType === 'model') {
      return (
        <primitive
          // ref={mesh}
          //@ts-ignore
          object={fbx}
          scale={0.1}
          castShadow
          receiveShadow
        />
      )
    }

    return (
      <mesh ref={mesh}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="black" />
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
        {objToAdd && (
          <AddObject
            object={objToAdd}
            onClick={(objToAddWithPos) => handleAddObject(objToAddWithPos)}
          />
        )}
        {renderObjs?.map((object, index) => {
          switch (object.customType) {
            case 'cuboid':
              const cuboid = object as Cuboid
              return (
                <RectangularCuboid
                  key={index}
                  onClick={(mesh) => setSelectedObject(mesh)}
                  position={cuboid?.position || [0, 0, 0]}
                  size={cuboid.size}
                  isSelected={
                    selectedObject?.userData.customId === cuboid.customId
                  }
                  // type={cuboid.type}
                  color={cuboid.color}
                  customId={cuboid.customId}
                />
              )
            case 'model':
              const model = object as Model3d
              return <Model key={index} url={model.modelUrl} />
            default:
              return <></>
          }
        })}
        <Plane />
        <OrbitControls />
        <ambientLight intensity={0.8} />
      </Canvas>
    </>
  )
}

export default Game
