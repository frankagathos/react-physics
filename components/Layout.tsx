import React from 'react'
import Head from "next/head";
import WithSubnavigation from './Header';
import styles from '../styles/Layout.module.css'
import Footer from './Footer';
import CookieConsent from "react-cookie-consent";

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Head>
                <title>React physics</title>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="React components, Physics and more." />
            </Head>

            <WithSubnavigation />

            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
            <CookieConsent
                style={{ background: "#444",color:'white' }}
                buttonStyle={{ fontWeight: "bold",border:"1px solid white",padding:"5px 30px",color:"white" }}
                disableStyles={true}
                location={"top"}
                buttonClasses="btn btn-primary"
                containerClasses="alert"
                contentClasses="text-capitalize"
                overlay
            >
                This website uses cookies to enhance the user experience.
              
            </CookieConsent>
            <Footer />
        </>
    )
}

export default Layout