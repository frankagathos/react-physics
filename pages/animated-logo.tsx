import { NextPage } from 'next'
import React from 'react'
import AnimatedLogo from './../components/AnimatedLogo';

const AnLogoExample = () => {
    return (
        <div className={'container'}>


            <AnimatedLogo heading={'Cool Named Logo'} subHeading={'Description goes here'} logoWidth={200}></AnimatedLogo>
        </div>
    )
}

export default AnLogoExample