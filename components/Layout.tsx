import React from 'react'
import Head from "next/head";
import WithSubnavigation from './Header';
import styles from '../styles/Layout.module.css'
import AnimatedLogo from './AnimatedLogo';

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
            </div>
            <footer className={styles.footer}>
                <a
                    href="https://frankagathos.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Made by Frank Agathos
                </a>
            </footer>
        </>
    )
}

export default Layout