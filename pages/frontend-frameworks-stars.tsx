import { Button } from '@chakra-ui/react'
import { NextPage } from 'next'
import React, { useState } from 'react'
import StarsScene from '../components/StarsScene'
import styles from '../styles/frontEndFrameworksStars.module.scss'


const FrontEndFrameworksStars: NextPage = ({ data }: { data: any }) => {

    const [controls,setControls] = useState(false)
    return (
        <div className={styles.starsWrapper}>
            {data.map(x => {

                return (
                    <div key={x.name} className={styles.stars}>
                        <div className={styles.info}>
                            <p>{x.name}</p>
                            <p>{x.stargazers_count}</p>
                        </div>
                        <StarsScene controls={controls} count={x.stargazers_count}></StarsScene>
                        <Button colorScheme="blue" zIndex={1} right={25} bottom={50} position={'fixed'} onClick={() => setControls(!controls)}>Rotate night sky</Button>

                    </div>
                )
            }
            )}

        </div>
    )
}

export async function getStaticProps() {
    const urls = ["facebook/react", "vuejs/vue", "angular/angular", "sveltejs/svelte"]

    const data = await Promise.all(urls.map(id =>
        fetch(`https://api.github.com/repos/${id}`).then(resp => resp.json())
    ))

    return {
        props: { data: data }
    }
}


export default FrontEndFrameworksStars