import { Heading , Text , ListItem, ListIcon, OrderedList, UnorderedList } from '@chakra-ui/react'
import { NextPage } from 'next'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './frontEndFrameworksStars.module.scss'

interface Props {
    uiFrameworks: [any]
}

const FrontEndFrameworksStars: NextPage<Props> = ({ uiFrameworks }) => {
    return (
        <div className={styles.starsWrapper}>
            <>
            <Heading>Frontend frameworks stars</Heading>
            <Text>Night skies created with github stars using next.js dynamic</Text>
                <UnorderedList>
                    {uiFrameworks.map((item, index) => (
                        <>
                        <ListItem  key={index}>
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
            </>
        </div>
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