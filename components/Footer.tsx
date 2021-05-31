import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a
                href="https://frankagathos.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Made by <strong>Frank Agathos</strong>
            </a>
        </footer>
    )
}

export default Footer