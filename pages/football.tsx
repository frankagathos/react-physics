import React, { useState } from 'react'
import Head from 'next/head'
import { useEffect } from 'react';


const Cubes = () => {

    const [data,setData] = useState(null)

    useEffect(() => {
        fetch('https://api.football-data.org/v2/competitions/SA/scorers',{ headers: {
            'X-Auth-Token': '6417a0e1c04349f0884be2088bd27d91'
          }})
            .then(response => response.json())
            .then(data => setData(data));
    }, [])

    return (
        <>
            <Head>
                <meta name="description" content="Fetch data from football api" />
            </Head>
            {data?.scorers[0].numberOfGoals}
        </>
    )
}


export default Cubes