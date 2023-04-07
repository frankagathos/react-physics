import React from 'react'
import styles from './Footer.module.scss'
import { Typography } from '@mui/material'

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <a
        href="https://frankagathos.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong>&nbsp;Frank Agathos</strong>
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Copyright />
    </footer>
  )
}

export default Footer
