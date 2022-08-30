import React from 'react'
import Link from 'next/link'
import styles from '/styles/Home.module.css'
import Script from 'next/script'

const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
        <ul>
        <Link href="/about"><li className={styles.navli}>About</li></Link>
        <Link href="/"><li className={styles.navli}>Home</li></Link>
        <Link href="/blog"><li className={styles.navli}>Blog</li></Link>
        <Link href="/contact"><li className={styles.navli}>Contact</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar