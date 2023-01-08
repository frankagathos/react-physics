import { useFBX } from '@react-three/drei'
import { useRef } from 'react'

const Model = ({ onClick, url }: any) => {
  let fbx = useFBX(url)

  const mesh = useRef<THREE.Mesh>(null!)

  return <primitive ref={mesh} object={fbx} castShadow receiveShadow />
}
export default Model
