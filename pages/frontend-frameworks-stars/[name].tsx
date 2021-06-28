import React from 'react'
import StarsScene from '../../components/StarsScene'
import styles from './frontEndFrameworksStars.module.scss'

import { useRouter } from "next/router";

const FrontEndFrameworksStars = () => {

    const router = useRouter()
    const { name, stars } = router.query; // Destructuring our router object
    return (
        <div className={styles.starsWrapper}>
            <div className={styles.stars}>
                <div className={styles.info}>
                    <p>{name}</p>
                    <p>{stars}</p>   
                </div>
                <StarsScene count={Number(stars)}></StarsScene>                     
            </div>           
        </div>   
    )
}

export default FrontEndFrameworksStars