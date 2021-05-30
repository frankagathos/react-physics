import { NextPage } from 'next'
import React from 'react'

interface Props {
    name: string
    stars: number
}

const Test: NextPage<Props> = ({ name, stars }) => {
    return (<>
        <div>Project: {name}</div>
        <div>Github stars: {stars}</div>
    </>
    )
}

Test.getInitialProps = async () => {
    const res = await fetch('https://api.github.com/repos/frankagathos/gatsby-with-php-form')
    const json = await res.json()
    return { name: json.name, stars: json.stargazers_count }
}


export default Test