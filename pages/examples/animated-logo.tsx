import { NextPage } from 'next'
import Head from 'next/head';
import React from 'react'
import Logo from '../../components/Logo';


const AnLogoExample = () => {
    return (
        <>
            <Head>
                <meta name="description" content="React animated Logo component" />
            </Head>

            <div className={'container'}>
                <Logo heading={'Cool Named Logo'} subHeading={'Description goes here'} logoWidth={200}></Logo>
            </div>
        </>
    )
}

export default AnLogoExample