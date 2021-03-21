import { NextPage } from 'next'
import React from 'react'

interface Props {
    stars: number
}

const About: NextPage<Props> = ({ stars }) => {
    return (
        <div>Github stars {stars}</div>
    )
}

About.getInitialProps = async () => {
    const res = await fetch('https://api.github.com/repos/frankagathos/gatsby-with-php-form')
    const json = await res.json()
    return { stars: json.stargazers_count }
}


export default About