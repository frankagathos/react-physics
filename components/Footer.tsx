import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span>Made by</span> <a
                href="https://frankagathos.com"
                target="_blank"
                rel="noopener noreferrer"
            > 
            <strong>&nbsp;Frank Agathos</strong>
            </a>
        </footer>
    )
}

export default Footer