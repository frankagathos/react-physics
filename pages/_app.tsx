import '../styles/globals.scss'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import React from 'react'
import Layout from '../components2D/Layout'

function MyApp({ Component, pageProps }: any) {
  const router = useRouter()
  const handleRouteChange = (url: string) => {
    if (typeof window !== 'undefined') {
      //@ts-ignore
      window?.gtag?.('config', `${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`, {
        page_path: url,
      })
    }
  }

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
