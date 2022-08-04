import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
  <div>
    <Head>
      <title>eshaan</title>
    </Head>

    <div className={styles.fonts}>
      <h2 className={styles.center}>eshaan tibrewala</h2>
      <h1>Eshaan Tibrewala</h1>
    </div>
    <div>
      <a href='https://www.linkedin.com/in/eshaantibrewala/' target="_blank" rel="noreferrer">linkedin</a>
    </div>
    <div>
      <a href='https://github.com/etibrewala' target="_blank" rel="noreferrer">github</a>
    </div>
    <div>
      <a href="mailto:eshaantibrewala@gmail.com">email</a>
    </div>
  </div>
  )
}
