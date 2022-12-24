import * as THREE from 'three'
import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { NextPage } from 'next'
import { Canvas, useLoader } from '@react-three/fiber'

const Earth: NextPage = () => {
  const Sphere = () => {
    const mainTexture = useLoader(THREE.TextureLoader, '../earthmap1k.jpg')
    const bumpMap = useLoader(THREE.TextureLoader, '../earthbump.jpg')

    return (
      <mesh>
        <meshPhongMaterial
          map={mainTexture}
          bumpMap={bumpMap}
          bumpScale={0.3}
        />
        {/* <meshBasicMaterial /> */}
        <sphereGeometry args={[0.6, 32, 32]} />
      </mesh>
    )
  }

  return (
    <Canvas
      style={{ minHeight: '100vh' }}
      camera={{
        fov: 60,
        // aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 5000,
        isPerspectiveCamera: true,
        position: [0, 0, 2],
      }}
    >
      <OrbitControls />
      <ambientLight intensity={0.8} />
      {/* <pointLight intensity={1} position={[0, 6, 0]} /> */}
      <Sphere />
    </Canvas>
  )
}
export default Earth

// // global variables
// const canvas = document.querySelector('.webgl')

// // scene setup
// const scene = new THREE.Scene()

// // camera setup
// const fov = 60
// const aspect = window.innerWidth / window.innerHeight
// const near = 0.1
// const far = 1000

// const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
// camera.position.z = 2
// scene.add(camera)

// // renderer setup
// const renderer = new THREE.WebGLRenderer({
//   canvas: canvas as HTMLCanvasElement,
//   antialias: true,
// })
// renderer.setSize(window.innerWidth, window.innerHeight)
// renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1)
// renderer.autoClear = false
// renderer.setClearColor(0x000000, 0.0)

// // orbit control setup
// // @ts-ignore
// const controls = new OrbitControls(camera, renderer.domElement)

// // earth geometry
// const earthGeometry = new THREE.SphereGeometry(0.6, 32, 32)

// // earth material
// const earthMaterial = new THREE.MeshPhongMaterial({
//   // roughness: 1,
//   // metalness: 0,
//   map: THREE.ImageUtils.loadTexture('texture/earthmap1k.jpg'),
//   bumpMap: THREE.ImageUtils.loadTexture('texture/earthbump.jpg'),
//   bumpScale: 0.3,
// })

// // earth mesh
// const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial)
// scene.add(earthMesh)

// // cloud Geometry
// const cloudGeometry = new THREE.SphereGeometry(0.63, 32, 32)

// // cloud metarial
// const cloudMetarial = new THREE.MeshPhongMaterial({
//   map: THREE.ImageUtils.loadTexture('texture/earthCloud.png'),
//   transparent: true,
// })

// // cloud mesh
// const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMetarial)
// scene.add(cloudMesh)

// // galaxy geometry
// const starGeometry = new THREE.SphereGeometry(80, 64, 64)

// // galaxy material
// const starMaterial = new THREE.MeshBasicMaterial({
//   map: THREE.ImageUtils.loadTexture('texture/galaxy.png'),
//   side: THREE.BackSide,
// })

// // galaxy mesh
// const starMesh = new THREE.Mesh(starGeometry, starMaterial)
// scene.add(starMesh)

// // handling resizing
// window.addEventListener(
//   'resize',
//   () => {
//     camera.aspect = window.innerWidth / window.innerHeight
//     camera.updateProjectionMatrix()
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     render()
//   },
//   false,
// )

// // // current fps
// // const stats = Stats()
// // document.body.appendChild(stats.dom)

// // spinning animation
// const animate = () => {
//   requestAnimationFrame(animate)
//   starMesh.rotation.y -= 0.002
//   earthMesh.rotation.y -= 0.0015
//   cloudMesh.rotation.y -= 0.001
//   controls.update()
//   render()
//   // stats.update()
// }
