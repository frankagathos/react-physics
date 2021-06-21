import { NextPage } from 'next'
import React from 'react'
import StarsScene from '../components/StarsScene'
import styles from '../styles/frontEndFrameworksStars.module.scss'


const FrontEndFrameworksStars: NextPage = ({ data }: { data: any }) => {

    return (
        <div className={styles.starsWrapper}>
            {data.map(x => {

                return (
                    <div key={x.name} className={styles.stars}>
                        <div className={styles.info}>
                            <p>{x.name}</p>
                            <p>{x.stargazers_count}</p>
                        </div>
                        <StarsScene count={x.stargazers_count}></StarsScene>
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