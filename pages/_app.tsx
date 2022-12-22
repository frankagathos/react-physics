import '../styles/globals.scss'
import { ChakraProvider } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import theme from '../theme/theme'
import React from 'react'
import Layout from '../layout/Layout'

function MyApp({ Component, pageProps }: any) {
  const router = useRouter()
  const handleRouteChange = (url: string) => {
    //@ts-ignore
    window.gtag('config', `${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`, {
      page_path: url,
    })
  }

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
export default MyApp
