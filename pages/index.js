import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
<div>
  <Head>
    <title>eshaan</title>
  </Head>
  <div className="topnav">
  <a className="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
  <div className={styles.center}>
    <h2 className={styles.fonts}>eshaan tibrewala</h2>
    </div>
    <a href='https://www.linkedin.com/in/eshaantibrewala/' target="_blank"><div>linkedin</div></a>
    <a href='https://github.com/etibrewala' target="_blank"><div>github</div></a>
    <div>email</div>
  </div>
  )
}
