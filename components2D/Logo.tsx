import React from 'react'
import Link from 'next/link'
import styles from './Logo.module.scss'

interface Props {
  heading: string
  subHeading: string
  logoWidth: number
}

const Logo: React.FC<Props> = ({ heading, subHeading, logoWidth }) => {
  return (
    <Link
      style={{ width: `${logoWidth}px` }}
      className={styles.animatedLogo}
      href={'/'}
    >
      <div>
        <span className={styles.heading}>{heading}</span>
      </div>
      {/* <span className={styles.subHeading}>{subHeading}</span> */}
    </Link>
  )
}

export default Logo
