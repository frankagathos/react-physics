import { OrbitControls } from '@react-three/drei'
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

function Plane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[150, 150, 1]} />
      <meshStandardMaterial color="white" side={THREE.DoubleSide} />
    </mesh>
  )
}

const AddObject = ({
  object,
  onClick,
}: {
  object: CustomObject
  onClick: (object: CustomObject) => void
}) => {
  const mesh = useRef<THREE.Mesh>(null!)
  const position = useCursorRaycaster(mesh)

  useEventListener('pointerdown', (e) => {
    //@ts-ignore
    if (e.button === 0 && e?.target?.tagName === 'CANVAS') {
      onClick({
        ...object,
        position: [
          position?.current?.x || 0,
          position?.current?.y || 0,
          position?.current?.z || 0,
        ],
      })
    }
  })

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="black" />
    </mesh>
  )
}

const Game: NextPage = () => {
  const [selectedObject, setSelectedObject] = useState<THREE.Object3D | null>(
    null,
  )
  const [renderObjs, setRenderObjs] = useState<CustomObjects>([])
  const [objToAdd, setObjToAdd] = useState<CustomObject | null>(null)

  // CONTROLS
  useControls({
    box: button(() =>
      setObjToAdd({
        customId: generateUuid(),
        customType: 'cuboid',
        position: [0, 0, 0],
        size: [1, 1, 1],
        type: 'Static',
        color: 'black',
      }),
    ),
    default: button(() => setObjToAdd(null)),
  })

  const handleAddObject = (objToAdd: CustomObject) => {
    setRenderObjs((objs) => [...objs, objToAdd])
  }

  return (
    <>
      <Canvas
        style={{ width: '100vw', height: '100vh' }}
        shadows
        camera={{
          position: [0, 15, 25],
          isPerspectiveCamera: true,
        }}
      >
        {/* <axesHelper position={new THREE.Vector3(0, 0, 0)} args={[5]} /> */}
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
                  position={cuboid.position}
                  size={cuboid.size}
                  isSelected={
                    selectedObject?.userData.customId === cuboid.customId
                  }
                  // type={cuboid.type}
                  color={cuboid.color}
                  customId={cuboid.customId}
                />
              )
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
