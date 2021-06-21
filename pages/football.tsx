import React, { useState } from 'react'
import Head from 'next/head'
import { useEffect } from 'react';
import { List, ListItem, UnorderedList, Heading } from "@chakra-ui/react"

const Football = () => {
    const authToken = '6417a0e1c04349f0884be2088bd27d91';
    const [data, setData] = useState<null | any>(null)

    useEffect(() => {
        fetch('https://api.football-data.org/v2/competitions/SA/scorers', {
            headers: {
                'X-Auth-Token': authToken
            }
        })
            .then(response => response.json())
            .then(data => setData(data));
    }, [])

    return (
        <>
            <Head>
                <meta name="description" content="Fetch data from football-data.org API. Data fetching example in next.js." />
            </Head>
            <Heading>Italy's top scorers</Heading>
            <br></br>
            {data &&

                <UnorderedList>
                    {data.scorers.map(scorer => {
                        return (
                            <ListItem><span>{scorer.player.name}</span>  has <span>{scorer.numberOfGoals}</span></ListItem>
                        )
                    })
                    }
                </UnorderedList>}

        </>
    )
}


export default Football