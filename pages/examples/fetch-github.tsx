import { NextPage, NextPageContext } from 'next'
import React from 'react'
import { Heading, Text, Container } from '@chakra-ui/react'
import Text3d from '../../components/Text3d'

interface Props {
  name: string
  stars: number
}

const FetchGithub: NextPage<Props> = ({ name, stars }) => {
  return (
    <Container>
      <Heading>Fetch data from github api</Heading>
      <Text>Example fetching data with SSR</Text>
      <br></br>
      <Text3d fontSize={15} textCopy={`${name}, has ${stars}.`} />
    </Container>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const res = await fetch('https://api.github.com/repos/mrdoob/three.js/')
  const json = await res.json()
  return {
    props: { name: json.name, stars: json.stargazers_count }, // will be passed to the page component as props
  }
}

export default FetchGithub
