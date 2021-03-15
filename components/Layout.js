import React from 'react'
import Head from "next/head";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Default</title>
                <meta charSet="utf-8" />
            </Head>
            <div>
                Top Nav
            </div>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout