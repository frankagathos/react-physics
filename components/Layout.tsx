import React from 'react'
import Head from "next/head";
import WithSubnavigation from './Header';
import styles from '../styles/Home.module.css'

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Head>
                <title>Frank's world</title>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <WithSubnavigation />
            <div className={styles.container}>

                <main className={styles.main}>
                    {children}
                </main>
            </div>
            {/* <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
                </a>
            </footer> */}
        </>
    )
}

export default Layout