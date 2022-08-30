import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      </Head>
      <main className={styles.main}>
        <Image className={styles.signature} src="/signature.png" height={160} width={570} />
        <div className={styles.home_main_div}>
          <div className={styles.imgwrap}>
            <Image className={styles.home_img} src="/steve_jobs01.jpg" height={450} width={400} />
          </div>
          <div className={styles.home_main_par}>
            <div className={styles.home_main_para_innner}>
              <h3>
              June 12, 2005
              </h3>
              <p>
                Again, you can’t connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future. You have to trust in something — your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.
              </p>
              <h2 className={styles.quotes_heading}>
                Stay Hungry , Stay Foolish
              </h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
