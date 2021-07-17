import React, { Suspense, useState } from 'react'
import Head from 'next/head'
import { useEffect } from 'react';
import { ListItem, UnorderedList, Heading, Text, Container } from "@chakra-ui/react"
import { Billboard, OrbitControls } from '@react-three/drei';
import { Setup } from '../components/Setup';

import { useLoader } from '@react-three/fiber';
import * as THREE from "three";

const MainPano = () => {
    const mainTexture = useLoader(THREE.TextureLoader, "../panorama.jpg");

    return (
        <mesh scale={[-1, 1, 1]}>
            <sphereBufferGeometry args={[500, 60, 40]} />
            <meshBasicMaterial map={mainTexture} side={THREE.BackSide} />
        </mesh>
    );
};
const Mesh = ({url}:{url:string}) => {
    const mainTexture = useLoader(THREE.TextureLoader, "../italy.png");

    return (
        <meshBasicMaterial
            attach="material"
            map={mainTexture}
        />
    );
};

const Football = () => {
    const authToken = '6417a0e1c04349f0884be2088bd27d91';
    const [data, setData] = useState<null | any>(null)
    const follow = true
    const lockX = false
    const lockY = false
    const lockZ = false
    // const texture2 = useLoader(THREE.TextureLoader, "../test_pano.jpg");


    useEffect(() => {
        fetch('https://api.football-data.org/v2/competitions/EC/scorers', {
            headers: {
                'X-Auth-Token': authToken
            }
        })
            .then(response => response.json())
            .then(data => setData(data));
    }, [])

    return (
        <div>
            <Head>
                <meta name="description" content="Fetch data from football-data.org API. Data fetching example in next.js." />
            </Head>
            <Heading>Euro 21 top scorers</Heading>
            <br></br>
            {data &&

                <UnorderedList>
                    {data.scorers.map((scorer: any) => {
                        return (
                            <ListItem><span>{scorer.player.name}:</span> <span>{scorer.numberOfGoals}</span></ListItem>
                        )
                    })
                    }
                </UnorderedList>}

            <Setup controls={true} cameraPosition={new THREE.Vector3(0, 0, 10)}>
                <>
                    <Billboard
                        position={[-4, 0, 0]}
                        args={[3, 2]}
                        material-color="red"
                        follow={follow}
                        lockX={lockX}
                        lockY={lockY}
                        lockZ={lockZ}
                    >
                        <Suspense fallback={"Loading..."}>
                            <Mesh />
                        </Suspense>
                    </Billboard>


                    <Billboard
                        position={[-4, 2, 0]}
                        args={[3, 2]}
                        material-color="orange"
                        follow={follow}
                        lockX={lockX}
                        lockY={lockY}
                        lockZ={lockZ}
                    />
                    <Billboard
                        position={[0, 0, 0]}
                        args={[3, 2]}
                        material-color="green"
                        follow={follow}
                        lockX={lockX}
                        lockY={lockY}
                        lockZ={lockZ}
                    />
                    <Billboard
                        position={[4, -2, 0]}
                        args={[3, 2]}
                        material-color="blue"
                        follow={follow}
                        lockX={lockX}
                        lockY={lockY}
                        lockZ={lockZ}
                    />
                    <Billboard
                        position={[4, 2, 0]}
                        args={[3, 2]}
                        material-color="yellow"
                        follow={follow}
                        lockX={lockX}
                        lockY={lockY}
                        lockZ={lockZ}
                    />


                    <Suspense fallback={"Loading pano..."}>
                        <MainPano />
                    </Suspense>
                </>
            </Setup>
        </div>
    )
}


export default Football