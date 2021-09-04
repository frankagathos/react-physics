import { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import { Heading, Text, ListItem, UnorderedList, Container, Divider, SimpleGrid, Box } from '@chakra-ui/react'
import { NAV_ITEMS } from '../components/NavItems'
import Link from 'next/link'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <meta name="description" content="Examples of 3D scenes with react three fiber components. 3D react components." />
            </Head>
            <Container>
                <Heading>React Physics Examples</Heading>
                <Text>Maintained examples of 3D components built with react-three-fiber.</Text>
                <SimpleGrid columns={1} spacing={10}>
                    <Box>
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
                    </Box>
                </SimpleGrid>

            </Container>
        </>
    )
}

export default Home