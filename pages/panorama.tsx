import { Button } from '@chakra-ui/react';
import { NextPage } from 'next'
import React, { useState } from 'react'
import SimplePanorama from '../components/SimplePano';
interface Props {
    stars: number
}
const Panorama: NextPage<Props> = ({ stars }) => {

    const [rotate,setRotate] =useState<boolean>(true);
    
    return (
        <>

        <Button zIndex={1} right={25} top={150} position={'absolute'} onClick={()=>setRotate(!rotate)}>Rotate toggle</Button>

        <SimplePanorama autoRotate={rotate} />
        </>
    )
}

Panorama.getInitialProps = async () => {
    const res = await fetch('https://api.github.com/repos/frankagathos/gatsby-with-php-form')
    const json = await res.json()
    return { stars: json.stargazers_count }
}


export default Panorama