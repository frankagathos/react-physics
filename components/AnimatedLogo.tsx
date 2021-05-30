import { Random } from "react-animated-text"
import React, { PureComponent } from "react"
import Link from 'next/link';
import styles from '../styles/animated-logo.module.scss'
class AnimatedLogo extends PureComponent {
    render() {
        return (

            <Link href={'/'}>
                <a className={styles.animatedLogo}>
                    <div>
                        <span>React Physics</span>
                    </div>

                    <span className={styles.animatedText}>
                        <Random
                            text={"front end stuff..."}
                            iterations={1}
                            effect="verticalFadeIn"
                            effectChange={2}
                            effectDirection="up"
                        />
                        {/* Front end developer */}
                    </span>

                </a>
            </Link>


        )
    }
}

export default AnimatedLogo