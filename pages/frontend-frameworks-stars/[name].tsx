import React from 'react'
import StarsScene from '../../components3D/StarsScene'
import styles from './frontEndFrameworksStars.module.scss'

import { useRouter } from 'next/router'

const FrontEndFrameworksStars = () => {
  const router = useRouter()
  const { name, stars } = router.query
  return (
    <div className={styles.starsWrapper}>
      <div className={styles.stars}>
        <StarsScene textCopy={name} count={Number(stars)} />
      </div>
    </div>
  )
}

export default FrontEndFrameworksStars
