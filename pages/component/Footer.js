import React from 'react'
import styles from '/styles/Home.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_div}>
        <div className={styles.footer_div_1}>
          <div>
           Powered by
          </div>
          <span className={styles.logo}>
            <Image className={styles.img} src="/logo.png" alt="Logo" width={100} height={80} />
          </span>
        </div>
        <div className={styles.footer_div_2}>
          Desinged By Karlex Void

          <div className={styles.links}>
                  <div className={styles.link}>
                    <a><img className={styles.img}src="/linkedin-logo.png" alt="linkedin" /></a>
                  </div>
                  <div className={styles.link}>
                    <a><img className={styles.img}src="/github-logo.png" alt="github" /></a>
                  </div>
                </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer