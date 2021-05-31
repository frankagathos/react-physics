import Head from 'next/head'
import Link from 'next/link'
import { Heading } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
export default function Home() {
  return (
    <div className={'container'}>
      <Heading>Welcome to React Physics</Heading>
      <Text>Here you can find examples of Physics in js, cool components and more...</Text>
    </div>
  )
}
