import React from 'react'
import Head from "next/head";
import WithSubnavigation from './Header';
import styles from './Layout.module.scss'
import Footer from './Footer';
import CookieConsent from "react-cookie-consent";

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Head>
                <title>React Physics</title>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="author" content="Frank Agathos (Frantzeskos Agathos)"></meta>
                <meta name="keywords" content="3D components, React, React.js, Three.js, Three.js fiber, React three fiber, Physics, VR, Science , javascript, API integration, API, React-Redux , 3D web components, next.js"></meta>
                <meta name="description" content="React physics. 3D Components built with three.js fiber in a next.js app with typescript. Data fetching examples and more." />
                {/* Global Site Tag (gtag.js) - Google Analytics */}
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
                    }}
                />
            </Head>

            <WithSubnavigation />

            <main className={styles.main}>
                {children}
            </main>

            <CookieConsent
                style={{ background: "#444", color: 'white', position: 'fixed', bottom: 0, left: 0, height: 'fit-content' }}
                buttonStyle={{ fontWeight: "bold", border: "1px solid white", padding: "5px 30px", color: "white" }}
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