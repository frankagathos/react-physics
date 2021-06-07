import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/Layout'
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    gray: {
      800: '#f2eae2'
    },
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;