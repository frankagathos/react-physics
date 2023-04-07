import { NextPage, NextPageContext } from 'next'
import React from 'react'
import Text3d from '../../components3D/Text3d'

interface Props {
  name: string
  stars: number
}

const FetchGithub: NextPage<Props> = ({ name, stars }) => {
  return (
    <div>
      <h1>Fetch data from github api</h1>
      <p>Example fetching data with SSR</p>
      <br></br>
      <Text3d fontSize={15} textCopy={`${name}, has ${stars}.`} />
    </div>
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
