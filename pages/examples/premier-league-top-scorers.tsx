import React, { Suspense, useState } from 'react'
import Head from 'next/head'
import { useEffect } from 'react';
import { ListItem, UnorderedList, Heading, Text, Container } from "@chakra-ui/react"
import { Billboard } from '@react-three/drei';
import { Setup } from '../../components/Setup';
import Roboto from '../../fonts/Roboto_Regular.json'
import { useLoader } from '@react-three/fiber';
import * as THREE from "three";

const MainPano = () => {
    const mainTexture = useLoader(THREE.TextureLoader, "../stadium360A.jpg");

    return (
        <mesh scale={[-1, 1, 1]}>
            <sphereBufferGeometry args={[500, 60, 40]} />
            <meshBasicMaterial map={mainTexture} side={THREE.BackSide} />
        </mesh>
    );
};
const Mesh = ({ url }: { url?: string }) => {
    const mainTexture = useLoader(THREE.TextureLoader, "../italy.png");

    return (
        <meshBasicMaterial
            attach="material"
            map={mainTexture}
        />
    );
};
function Text3d({ text }: { text: string }) {
    const font = new THREE.FontLoader().parse(Roboto);
    const textOptions = {
        font,
        size: 1,
        height: 1
    };
    return (
        <mesh>
            <textGeometry attach='geometry' args={[text, textOptions]} />
            <meshStandardMaterial attach='material' color="hotpink" />
        </mesh>
    )
}
const PremierLeagueTopScorers = () => {
    const authToken = '6417a0e1c04349f0884be2088bd27d91';
    const [topScorers, setTopScorers] = useState<null | any>(null)

    const follow = false
    const lockX = false
    const lockY = false
    const lockZ = false

    useEffect(() => {
        fetch('https://api.football-data.org/v2/competitions/PL/scorers', {
            headers: {
                'X-Auth-Token': authToken
            }
        })
            .then(response => response.json())
            .then(data => setTopScorers(data));
    }, [])

    return (
        <div>
            <Head>
                <meta name="description" content="Fetch data from football-data.org API. Data fetching example in next.js." />
            </Head>

            {/* <Container>
                <Heading>Premier league top scorers</Heading>
                {topScorers && topScorers.scorers &&
                    <UnorderedList>
                        {topScorers.scorers.map((scorer: any) => {
                            return (
                                <ListItem><span>{scorer.player.name}:</span> <span>{scorer.numberOfGoals}</span></ListItem>
                            )
                        })
                        }
                    </UnorderedList>}
            </Container> */}

            <Setup controls={true} cameraPosition={new THREE.Vector3(0, 0, 30)}>
                {/* <Billboard
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
                </Billboard> */}

                {topScorers && topScorers.scorers &&

                    topScorers.scorers.reverse().map((scorer: any, i: number) => {
                        return (
                            <>
                                <Billboard
                                    key={i}
                                    position={[-4, i + 2, 0]}
                                    args={[50, 25]}
                                    material-color="black"
                                    follow={follow}
                                    lockX={lockX}
                                    lockY={lockY}
                                    lockZ={lockZ}
                                >
                                    <Text3d text={`${scorer.player.name} ${scorer.numberOfGoals}`} />
                                </Billboard>
                                {/* below not working */}
                                {/* <Billboard
                                    key={i}
                                    position={[9, i + 2, 0]}
                                    args={[3, 3]}
                                    material-color="red"
                                    follow={follow}
                                    lockX={lockX}
                                    lockY={lockY}
                                    lockZ={lockZ}
                                >
                                    <Text3d text={scorer.numberOfGoals} />
                                </Billboard> */}
                            </>
                        )
                    })
                }
                
                {/* 
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
                /> */}


                <Suspense fallback={"Loading pano..."}>
                    <MainPano />
                </Suspense>
            </Setup>
        </div>
    )
}


export default PremierLeagueTopScorers