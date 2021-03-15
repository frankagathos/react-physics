import React from 'react'
import Head from "next/head";
import WithSubnavigation from './Header';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Default</title>
                <meta charSet="utf-8" />
            </Head>
            <WithSubnavigation/>
            {children}

        </>
    )
}

export default Layout