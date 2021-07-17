import { Heading , Text , ListItem, ListIcon, OrderedList, UnorderedList , Container } from '@chakra-ui/react'
import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

interface Props {
    uiFrameworks: [any]
}

const FrontEndFrameworksStars: NextPage<Props> = ({ uiFrameworks }) => {
    return (
            <Container>
            <Heading>Frontend frameworks stars</Heading>
            <Text>Night skies pages created with github stars fetched from github api and next.js dynamic routing.</Text>
            <br></br>
                <UnorderedList>
                    {uiFrameworks.map((item, index) => (
                        <>
                        <ListItem style={{textTransform:'capitalize'}}  key={index}>
                            <Link 
                            href={`frontend-frameworks-stars/${item.name}?stars=${item.stargazers_count}`}>
                                <a>
                                    {item.name}
                                </a>
                            </Link>
                        </ListItem>
                        </>
                    ))}
                </UnorderedList>
            </Container>
    )
}

export async function getStaticProps() {
    const urls = ["facebook/react", "vuejs/vue", "angular/angular", "sveltejs/svelte"]

    const data = await Promise.all(urls.map(id =>
        fetch(`https://api.github.com/repos/${id}`).then(resp => resp.json())
    ))

    return {
        props: { uiFrameworks: data }
    }
}


export default FrontEndFrameworksStars