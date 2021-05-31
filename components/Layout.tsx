import React from 'react'
import Head from "next/head";
import WithSubnavigation from './Header';
import styles from '../styles/Layout.module.css'
import AnimatedLogo from './AnimatedLogo';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Head>
                <title>React physics</title>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <WithSubnavigation />

            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            <Footer/>
            </div>
        </>
    )
}

export default Layout