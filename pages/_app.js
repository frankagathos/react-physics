import '../styles/globals.scss'
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/Layout'
import { extendTheme } from "@chakra-ui/react"
import { useRouter } from 'next/router';
import {useEffect} from 'react'
const theme = extendTheme({
  components: {
    Container: {
      // 1. We can update the base styles
      baseStyle: {
        paddingTop: '25px'
      },
    },
  },
  colors: {
    gray: {
      800: '#f2eae2'
    },
  },
})

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const handleRouteChange = (url) => {
    window.gtag('config', `${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`, {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;