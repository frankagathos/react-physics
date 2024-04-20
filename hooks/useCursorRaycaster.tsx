import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { MutableRefObject, useRef } from 'react'

function getPositionFromPointer(
  event: PointerEvent,
  camera: THREE.Camera,
  scene: THREE.Scene,
  positionVector: MutableRefObject<THREE.Vector3 | null>,
) {
  const pointer = new THREE.Vector2()
  const raycaster = new THREE.Raycaster()
  // calculate pointer position in normalized device coordinates
  // (-1 to +1) for both components

  pointer.x = (event.clientX / window.innerWidth) * 2 - 1
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
  raycaster.setFromCamera(pointer, camera)
  const intersects = raycaster.intersectObjects(scene.children)

  if (intersects.length > 0 && intersects[0].face) {
    positionVector.current = intersects[0].point.add(intersects[0].face.normal)
  }
}

export default function useCursorRaycaster(
  mesh: React.MutableRefObject<
    THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>
  >,
) {
  const { scene, camera } = useThree()
  const positionVector = useRef<THREE.Vector3 | null>(null)

  useFrame((state, delta) =>
    mesh.current.position.set(
      positionVector.current?.x ?? 0,
      positionVector.current?.y ?? 0,
      positionVector.current?.z ?? 0,
    ),
  )
  window.addEventListener('pointermove', (e) =>
    getPositionFromPointer(e, camera, scene, positionVector),
  )
  return positionVector
}
