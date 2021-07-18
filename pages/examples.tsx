import { NextPage } from 'next'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import Box from '../components/objects/box'
import { Heading, Text, ListItem, ListIcon, OrderedList, UnorderedList, Container } from '@chakra-ui/react'
import { NAV_ITEMS } from '../components/NavItems'
import Link from 'next/link'

interface Props {

}

const Examples: NextPage<Props> = () => {
    return (
        <>
            <Head>
                <meta name="description" content="Examples of 3D scenes with react three fiber components. 3D react components." />
            </Head>
            <Container>
                <Heading>Examples</Heading>
                <Text>Examples of 3D scenes with react-three-fiber components.</Text>


                {NAV_ITEMS[0].children && NAV_ITEMS[0].children.map((navItem) => (
                     navItem.href &&

                    <UnorderedList>
                        <ListItem key={navItem.label}>
                            <Link key={navItem.label} href={navItem.href}>
                                <a>{navItem.label}</a>
                            </Link>
                        </ListItem>
                    </UnorderedList>


                ))}

            </Container>
        </>
    )
}


export default Examples