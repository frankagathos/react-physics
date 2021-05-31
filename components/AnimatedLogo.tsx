import { Random } from "react-animated-text"
import React from "react"
import Link from 'next/link';
import styles from '../styles/animated-logo.module.scss'

interface Props {
    heading: string
    subHeading: string
    logoWidth: number
}

const AnimatedLogo: React.FC<Props> = ({ heading, subHeading, logoWidth }) => {
    return (

        <Link href={'/'}>
            <a style={{ width: `${logoWidth}px` }} className={styles.animatedLogo}>
                <div>
                    <span className={styles.heading}>{heading}</span>
                </div>

                <span className={styles.subHeading}>
                    <Random
                        text={subHeading}
                        iterations={1}
                        effect="verticalFadeIn"
                        effectChange={2}
                        effectDirection="up"
                    />
                </span>

            </a>
        </Link>
    )
}

export default AnimatedLogo