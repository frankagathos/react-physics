import { NextPage } from 'next'
import React, { Suspense } from 'react'
import Head from 'next/head'
import { Setup } from '../components/Setup'
import * as THREE from "three";
import { useLoader } from '@react-three/fiber';
import { Billboard } from '@react-three/drei'
import { useState } from 'react';

const MainPano = ({ url }: { url: string }) => {
    const mainTexture = useLoader(THREE.TextureLoader, url);
    return (
        <mesh scale={[-1, 1, 1]}>
            <sphereBufferGeometry args={[500, 60, 40]} />
            <meshBasicMaterial map={mainTexture} side={THREE.BackSide} />
        </mesh>
    );
};
const MeshWithTexture = ({ url }: { url: string }) => {
    const mainTexture = useLoader(THREE.TextureLoader, url);
    return (
        <meshBasicMaterial
            attach="material"
            map={mainTexture}
        />
    );
};


function TextMesh(props) {
  const mesh = useRef(null)

  useFrame(() => {
    mesh.current.rotation.x += 0.01
    mesh.current.rotation.y += 0.01
    mesh.current.rotation.z += 0.01
    mesh.current.geometry.center()
  })

  // parse JSON file with Three
  const font = new THREE.FontLoader().parse(Roboto);

  // configure font geometry
  const textOptions = {
    font,
    size: 10,
    height: 1
  };

  const three_texture = new THREE.TextureLoader().load(texture)
  three_texture.wrapS = THREE.RepeatWrapping
  three_texture.wrapT = THREE.RepeatWrapping
  three_texture.repeat.set(0.1, 0.1);

  return (
    <mesh position={[0, 0, -10]} ref={mesh}>
      <textGeometry attach='geometry' args={['three.js', textOptions]} />
      <meshBasicMaterial attach='material' args={{ map: three_texture }}/>
    </mesh>
  )
}


const BillBoardWithImagePage: NextPage = () => {

    const [cameraPosition, setcameraPosition] = useState(new THREE.Vector3(0, 0, -10))

    return (
        <>
            <Head>
                <meta name="description" content="3d Image gallery" />
            </Head>
            <Setup controls={true} cameraPosition={cameraPosition}>
                <Billboard
                    position={[0, 4, 0]}
                    args={[5, 3]}
                    material-color="white"
                    follow={true}
                    lockX={false}
                    lockY={false}
                    lockZ={false}
                >
                    <Suspense fallback={"Loading..."}>
                        <MeshWithTexture url={"../image-1.jpg"} />
                    </Suspense>
                </Billboard>

                <Billboard
                    position={[0, 0, 0]}
                    args={[5, 3]}
                    material-color="white"
                    follow={true}
                    lockX={false}
                    lockY={false}
                    lockZ={false}
                >
                    <Suspense fallback={"Loading..."}>
                        <MeshWithTexture url={"../image-2.jpg"} />
                    </Suspense>
                </Billboard>

                <Billboard
                    position={[0, -4, 0]}
                    args={[5, 3]}
                    material-color="white"
                    follow={true}
                    lockX={false}
                    lockY={false}
                    lockZ={false}
                >
                    <Suspense fallback={"Loading..."}>
                        <MeshWithTexture url={"../image-3.jpg"} />
                    </Suspense>
                </Billboard>

                <Billboard
                    position={[6, 0, 0]}
                    args={[5, 3]}
                    material-color="white"
                    follow={true}
                    lockX={false}
                    lockY={false}
                    lockZ={false}
                >
                    <Suspense fallback={"Loading..."}>
                        <MeshWithTexture url={"../image-4.jpg"} />
                    </Suspense>
                </Billboard>

                <Billboard
                    position={[-6, 0, 0]}
                    args={[5, 3]}
                    material-color="white"
                    follow={true}
                    lockX={false}
                    lockY={false}
                    lockZ={false}
                >
                    <Suspense fallback={"Loading..."}>
                        <MeshWithTexture url={"../image-5.jpg"} />
                    </Suspense>
                </Billboard>

                <Suspense fallback={"Loading pano..."}>
                    <MainPano url={"../panorama.jpg"} />
                </Suspense>
            </Setup>
        </>
    )
}


export default BillBoardWithImagePage