import { Button } from '@chakra-ui/react';
import { NextPage } from 'next'
import React from 'react'
import SimplePanorama from '../components/SimplePano';
interface Props {
    stars: number
}
const Panorama: NextPage<Props> = ({ stars }) => {

    
    return (


        <SimplePanorama autoRotate={true} />

    )
}

Panorama.getInitialProps = async () => {
    const res = await fetch('https://api.github.com/repos/frankagathos/gatsby-with-php-form')
    const json = await res.json()
    return { stars: json.stargazers_count }
}


export default Panorama