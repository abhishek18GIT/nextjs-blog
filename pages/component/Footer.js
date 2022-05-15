import React from 'react'
import styles from '/styles/Home.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        Powered by
        <span className={styles.logo}>
        <Image src="/logo.png" alt="Logo" width={100} height={80} />
        </span>
    </footer>
  )
}

export default Footer