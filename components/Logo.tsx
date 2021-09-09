import React from "react"
import Link from 'next/link';
import styles from './animatedLogo.module.scss'

interface Props {
    heading: string
    subHeading: string
    logoWidth: number
}

const Logo: React.FC<Props> = ({ heading, subHeading, logoWidth }) => {
    return (

        <Link href={'/'}>
            <a style={{ width: `${logoWidth}px` }} className={styles.animatedLogo}>
                <div>
                    <span className={styles.heading}>{heading}</span>
                </div>
                <span className={styles.subHeading}>
                    {subHeading}
                </span>
            </a>
        </Link>
    )
}

export default Logo