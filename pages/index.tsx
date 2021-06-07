import Head from 'next/head'
import { Heading, Stack } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
export default function Home() {

  return (
    <Stack textAlign={'center'} padding={15}>
      <Head>
        <title>Welcome to React Physics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={'container'}>
        <Heading>Welcome to React Physics</Heading>

        <Text>Here you can find a collection of <strong>React components</strong>, built with <strong>react-three-fiber </strong>
       and <strong>typescript</strong> in  a <strong>next.js</strong> application.

      </Text>

        <Text> All source code can be found in <a target="_blank" href="https://github.com/frankagathos/react-physics"><strong>GitHub</strong></a>
        </Text>
      </div>

    </Stack>
  )
}
