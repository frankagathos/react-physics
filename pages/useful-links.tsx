import { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Box from '../components/objects/box'
import { Heading, Text, ListItem, ListIcon, OrderedList, UnorderedList, Container } from '@chakra-ui/react'
import { NAV_ITEMS } from '../NavItems'
import Link from 'next/link'

interface Props {

}
const ReadingMaterial: NextPage<Props> = () => {
    return (
        <>
            <Head>
                <meta name="description" content="Resources to learn about three.js and packages." />
            </Head>
            <Container>
                <Heading>Useful links</Heading>
                <Text>Reading resources to learn more about three.js</Text>
                <UnorderedList>
                    <ListItem>
                        <a href="https://threejs.org/docs" target="_blank">Three.js-docs</a>
                    </ListItem>
                    <ListItem>
                        <a href="https://threejs.org/examples" target="_blank">Three.js-examples</a>
                    </ListItem>
                    <ListItem>
                        <a href="https://threejsfundamentals.org" target="_blank">Three.js-fundamentals</a>
                    </ListItem>
                    <ListItem>
                        <a href="https://discoverthreejs.com" target="_blank">Discover Threejs</a>
                    </ListItem>
                    <ListItem>
                        <a href="https://discoverthreejs.com/tips-and-tricks" target="_blank">Do's and don'ts for performance and best practices</a>
                    </ListItem>
                    <ListItem>
                        <a href="https://alligator.io/react/react-with-threejs" target="_blank">react-three-fiber alligator.io tutorial</a>
                    </ListItem>
                </UnorderedList>
                <br></br>
                <Text>Ecosystem - A list of useful packages:</Text>
                <UnorderedList>
                    <ListItem>
                        <a href="https://github.com/react-spring/gltfjsx" target="_blank">@react-three/gltfjsx &ndash; turns GLTFs into JSX components</a>
                    </ListItem>
                    <ListItem>
                        <a href="https://github.com/react-spring/drei" target="_blank">@react-three/drei  &ndash; useful helpers for react-three-fiber</a>
                    </ListItem>
                    <ListItem>
                        <a href="https://github.com/react-spring/react-postprocessing" target="_blank">@react-three/postprocessing &ndash; post-processing effects</a>
                    </ListItem>
                    <ListItem>
                        <a href="https://github.com/react-spring/react-three-flex" target="_blank">@react-three/flex  &ndash; flexbox for react-three-fiber</a>
                    </ListItem>
                    <ListItem>
                        <a href="https://github.com/react-spring/react-xr" target="_blank">@react-three/xr &ndash; VR/AR controllers and events</a>
                    </ListItem>
                    <ListItem>
                        <a href="https://github.com/react-spring/use-cannon" target="_blank">@react-three/cannon &ndash; physics based hooks</a>
                    </ListItem>
                    <ListItem>
                        <a href="https://github.com/react-spring/zustand" target="_blank">zustand &ndash; state management</a>
                    </ListItem>
                    <ListItem>
                        <a href="https://github.com/react-spring/react-spring" target="_blank">react-spring &ndash; a spring-physics-based animation library</a>
                    </ListItem>
                    <ListItem>
                        <a href="https://github.com/react-spring/react-use-gesture" target="_blank">react-use-gesture  &ndash; mouse/touch gestures</a>
                    </ListItem>
                    <ListItem>
                        <a href="https://github.com/pmndrs/leva" target="_blank">leva  &ndash; create GUI controls in seconds</a>
                    </ListItem>
                </UnorderedList>


            </Container>
        </>
    )
}


export default ReadingMaterial