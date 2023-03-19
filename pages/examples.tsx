import { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import { NAV_ITEMS } from '../NavItems'
import Link from 'next/link'
import { List, Typography } from '@mui/material'
import ListItem from '@mui/material/ListItem'

const Examples: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Examples of 3D scenes with react three fiber components. 3D react components."
        />
      </Head>

      <Typography variant="h2">Examples</Typography>

      {NAV_ITEMS[0].children &&
        NAV_ITEMS[0].children.map(
          (navItem, index) =>
            navItem.href && (
              <List key={`${index}`}>
                <ListItem key={navItem.label}>
                  <Link key={navItem.label} href={navItem.href}>
                    {navItem.label}
                  </Link>
                </ListItem>
              </List>
            ),
        )}
    </>
  )
}

export default Examples
