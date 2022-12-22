import { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import {
  Heading,
  Text,
  ListItem,
  UnorderedList,
  Container,
  Link,
  Stack,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

interface Props {}
const ReadingMaterial: NextPage<Props> = () => {
  const externalResources = [
    {
      link: 'https://threejs.org/docs',
      label: 'Three.js-docs',
    },
    {
      link: 'https://discoverthreejs.com',
      label: 'Discover Threejs',
    },
    {
      link: 'https://threejs.org/examples',
      label: 'Three.js-examples',
    },
    {
      link: 'https://discoverthreejs.com/tips-and-tricks',
      label: "Do's and don'ts for performance and best practices",
    },
    {
      link: 'https://alligator.io/react/react-with-threejs',
      label: 'react-three-fiber alligator.io tutorial',
    },
  ]

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Resources to learn three.js and react-three-fiber."
        />
      </Head>
      <Container>
        {/* <Heading as={"h1"}>Useful links</Heading>
        <Text>Find below all the links you need.</Text> */}
        <Heading as={'h2'}>Reading resources</Heading>
        <Text>Learn more about react three fiber and three.js.</Text>
        {externalResources.map((extRes, index) => {
          return (
            <Stack key={index} width={'fit-content'}>
              <Link key={index} href={extRes.link} isExternal>
                {extRes.label} <ExternalLinkIcon mx="2px" />
              </Link>
            </Stack>
          )
        })}

        <br></br>
        <Heading as={'h2'}>Ecosystem</Heading>
        <Text>A list of useful packages.</Text>
        <UnorderedList>
          <ListItem>
            <a
              href="https://github.com/react-spring/gltfjsx"
              target="_blank"
              rel="noreferrer"
            >
              @react-three/gltfjsx &ndash; turns GLTFs into JSX components
            </a>
          </ListItem>
          <ListItem>
            <a
              href="https://github.com/react-spring/drei"
              target="_blank"
              rel="noreferrer"
            >
              @react-three/drei &ndash; useful helpers for react-three-fiber
            </a>
          </ListItem>
          <ListItem>
            <a
              href="https://github.com/react-spring/react-postprocessing"
              target="_blank"
              rel="noreferrer"
            >
              @react-three/postprocessing &ndash; post-processing effects
            </a>
          </ListItem>
          <ListItem>
            <a
              href="https://github.com/react-spring/react-three-flex"
              target="_blank"
              rel="noreferrer"
            >
              @react-three/flex &ndash; flexbox for react-three-fiber
            </a>
          </ListItem>
          <ListItem>
            <a
              href="https://github.com/react-spring/react-xr"
              target="_blank"
              rel="noreferrer"
            >
              @react-three/xr &ndash; VR/AR controllers and events
            </a>
          </ListItem>
          <ListItem>
            <a
              href="https://github.com/react-spring/use-cannon"
              target="_blank"
              rel="noreferrer"
            >
              @react-three/cannon &ndash; physics based hooks
            </a>
          </ListItem>
          <ListItem>
            <a
              href="https://github.com/react-spring/zustand"
              target="_blank"
              rel="noreferrer"
            >
              zustand &ndash; state management
            </a>
          </ListItem>
          <ListItem>
            <a
              href="https://github.com/react-spring/react-spring"
              target="_blank"
              rel="noreferrer"
            >
              react-spring &ndash; a spring-physics-based animation library
            </a>
          </ListItem>
          <ListItem>
            <a
              href="https://github.com/react-spring/react-use-gesture"
              target="_blank"
              rel="noreferrer"
            >
              react-use-gesture &ndash; mouse/touch gestures
            </a>
          </ListItem>
          <ListItem>
            <a
              href="https://github.com/pmndrs/leva"
              target="_blank"
              rel="noreferrer"
            >
              leva &ndash; create GUI controls in seconds
            </a>
          </ListItem>
        </UnorderedList>
      </Container>
    </>
  )
}

export default ReadingMaterial
