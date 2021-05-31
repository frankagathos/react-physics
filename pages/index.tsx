import Head from 'next/head'
import Link from 'next/link'
import { Heading } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
export default function Home() {
  return (
    <div className={'container'}>
      <Heading>Welcome to React Physics</Heading>
      <Text>Here you can find a collection of React components, mostly Physics oriented.<br></br>
      implemented with <strong>typescript</strong> in <strong>next.js</strong>.

      </Text>

    </div>
  )
}
