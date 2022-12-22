import React from 'react'
import Head from 'next/head'
import styles from './Layout.module.scss'
import CookieConsent from 'react-cookie-consent'
import { DefaultSeo } from 'next-seo'
import WithSubnavigation from '../components/Header'
import Footer from '../components/Footer'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      {/* this might need updating */}
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.reactphysics.com/',
          site_name: 'React Physics',
          description:
            'React physics - 3D Components built with react-three-fiber in next.js',
          images: [
            {
              url: '/react-physics.jpg',
              width: 1200,
              height: 627,
              alt: 'Og Image Alt',
            },
          ],
        }}
      />
      <Head>
        <title>React Physics</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="8tzOYN3dqSwTi-YnD_-4xW8IuvUhED8MqKLS5A2wD-g"
        />
        <meta
          name="author"
          content="Frank Agathos (Frantzeskos Agathos) Front end developer - Physics."
        ></meta>
        <meta
          name="keywords"
          content="3D components, React,three.js examples, react-three-fiber, Physics, React.js, Three.js, Three.js fiber, React three fiber, VR, Science , javascript, API integration, API, React-Redux , 3D web components, next.js"
        ></meta>
        <meta
          name="description"
          content="React physics, 3D Components built with three.js fiber in next.js. Data fetching examples and more."
        />
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

      <main className={styles.main}>{children}</main>

      <CookieConsent
        style={{
          background: '#444',
          color: 'white',
          position: 'fixed',
          bottom: 0,
          left: 0,
          height: 'fit-content',
        }}
        buttonStyle={{
          fontWeight: 'bold',
          border: '1px solid white',
          padding: '5px 30px',
          color: 'white',
        }}
        disableStyles={true}
        location={'top'}
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