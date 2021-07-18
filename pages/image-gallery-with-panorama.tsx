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