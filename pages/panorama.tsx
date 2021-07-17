import { Button } from '@chakra-ui/react';
import { NextPage } from 'next'
import React, { useState } from 'react'
import SimplePanorama from '../components/SimplePano';

const Panorama: NextPage = () => {

    const [rotate, setRotate] = useState<boolean>(true);

    return (
        <>
            <Button colorScheme="blue" zIndex={1} right={25} top={150} position={'absolute'} onClick={() => setRotate(!rotate)}>Rotate toggle</Button>
            <SimplePanorama autoRotate={rotate} />
        </>
    )
}




export default Panorama