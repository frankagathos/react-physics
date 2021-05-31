import { NextPage } from 'next'
import Head from 'next/head';
import React from 'react'
import AnimatedLogo from './../components/AnimatedLogo';


const AnLogoExample = () => {
    return (
        <>
            <Head>
                <meta name="description" content="React animated Logo component" />
            </Head>

            <div className={'container'}>
                <AnimatedLogo heading={'Cool Named Logo'} subHeading={'Description goes here'} logoWidth={200}></AnimatedLogo>
            </div>
        </>
    )
}

export default AnLogoExample