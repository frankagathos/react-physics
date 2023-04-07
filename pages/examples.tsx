import { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import { NAV_ITEMS } from '../NavItems'
import Link from 'next/link'
import { Box, List, Typography } from '@mui/material'
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
      <Box padding={2}>
        <Typography variant="h2">Examples</Typography>

        <List>
          {NAV_ITEMS[0].children &&
            NAV_ITEMS[0].children.map(
              (navItem, index) =>
                navItem.href && (
                  <ListItem key={navItem.label}>
                    <Link key={navItem.label} href={navItem.href}>
                      {navItem.label}
                    </Link>
                  </ListItem>
                ),
            )}
        </List>
      </Box>
    </>
  )
}

export default Examples
