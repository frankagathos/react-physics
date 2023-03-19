import { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import { NAV_ITEMS } from '../NavItems'
import Link from 'next/link'

const Examples: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Examples of 3D scenes with react three fiber components. 3D react components."
        />
      </Head>
      <div>
        <h1>Examples</h1>
        <p>
          Maintained examples of 3D components built with react-three-fiber.
        </p>
        {NAV_ITEMS[0].children &&
          NAV_ITEMS[0].children.map(
            (navItem, index) =>
              navItem.href && (
                <ul key={`${index}`}>
                  <li key={navItem.label}>
                    <Link key={navItem.label} href={navItem.href}>
                      {navItem.label}
                    </Link>
                  </li>
                </ul>
              ),
          )}
      </div>
    </>
  )
}

export default Examples
