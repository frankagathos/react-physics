import { useBox, usePlane } from '@react-three/cannon'
import * as THREE from 'three'
// @ts-ignore
export default function Box({ color, ...props }: any) {
  const [ref] = useBox(() => ({
    // mass: 1,
    type: 'Static',
    args: [50, 1, 50],
    // isKinematic: true,
  }))
  return (
    // @ts-ignore
    <mesh ref={ref} receiveShadow>
      <gridHelper args={[50, 50]} position={new THREE.Vector3(0, 0.5, 0)} />
      <boxGeometry attach="geometry" args={[50, 1, 50]} />
      <meshPhongMaterial attach="material" color={color} />
    </mesh>
  )
}
