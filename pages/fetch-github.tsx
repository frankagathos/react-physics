import { NextPage } from 'next'
import React from 'react'
import { Heading, Text } from "@chakra-ui/react"

interface Props {
    name: string
    stars: number
}

const FetchGithub: NextPage<Props> = ({ name, stars }) => {
    return (
        <>
            <Heading>Fetch data from github api</Heading>
            <Text>Example fetching data with SSR</Text>
            <br></br>
            <div>Project: {name}</div>
            <div>Github stars: {stars}</div>
        </>
    )
}


export async function getServerSideProps(context) {
    const res = await fetch('https://api.github.com/repos/frankagathos/gatsby-with-php-form')
    const json = await res.json()
    return {
        props: { name: json.name, stars: json.stargazers_count }, // will be passed to the page component as props
    }
}

export default FetchGithub