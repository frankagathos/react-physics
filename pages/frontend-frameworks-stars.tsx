import {
  Heading,
  Text,
  ListItem,
  UnorderedList,
  Container,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

interface Props {
  uiFrameworks: [any]
}

const FrontEndFrameworksStars: NextPage<Props> = ({ uiFrameworks }: Props) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="This page contains a list of night skies pages created with github stars fetched from github API and next.js dynamic routing using getStaticProps."
        />
      </Head>
      <Container>
        <Heading>Frontend frameworks stars</Heading>
        <Text>
          Night skies pages created with github stars fetched from github API
          and next.js dynamic routing using getStaticProps.
        </Text>
        <UnorderedList>
          {uiFrameworks.map((item, index) => (
            <ListItem style={{ textTransform: 'capitalize' }} key={index}>
              <Link
                href={`frontend-frameworks-stars/${item.name}?stars=${item.stargazers_count}`}
              >
                {item.name}
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const urls = [
    'facebook/react',
    'vuejs/vue',
    'angular/angular',
    'sveltejs/svelte',
  ]

  const data = await Promise.all(
    urls.map((id) =>
      fetch(`https://api.github.com/repos/${id}`).then((resp) => resp.json()),
    ),
  )

  return {
    props: { uiFrameworks: data },
  }
}

export default FrontEndFrameworksStars
