import React from 'react'
import Link from 'next/Link'
import styles from '/styles/Home.module.css'
import Script from 'next/script'

const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
        <ul>
        <Link href="/about"><li>About</li></Link>
        <Link href="/"><li>Home</li></Link>
        <Link href="/blog"><li>Blog</li></Link>
        <Link href="/contact"><li>Contact</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar