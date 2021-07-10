import React, { useState } from 'react'
import Head from 'next/head'
import { useEffect } from 'react';
import { ListItem, UnorderedList, Heading , Text, Container} from "@chakra-ui/react"

const Football = () => {
    const authToken = '6417a0e1c04349f0884be2088bd27d91';
    const [data, setData] = useState<null | any>(null)

    useEffect(() => {
        fetch('https://api.football-data.org/v2/competitions/EC/standings', {
            headers: {
                'X-Auth-Token': authToken
            }
        })
            .then(response => response.json())
            .then(data => setData(data));
    }, [])

    return (
        <Container>
            <Head>
                <meta name="description" content="Fetch data from football-data.org API. Data fetching example in next.js." />
            </Head>
            <Heading>Euro 21 top scorers</Heading>
            <br></br>
            {data && data.scorers &&

                <UnorderedList>
                    {data.scorers.map(scorer => {
                        return (
                            <ListItem><span>{scorer.player.name}:</span> <span>{scorer.numberOfGoals}</span></ListItem>
                        )
                    })
                    }
                </UnorderedList>}
                {!data && <Text>Couldn't fetch</Text>}
        </Container>
    )
}


export default Football