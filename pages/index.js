import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

{/*import {
  FaLinkedinIn,
  FaGithub,
  FaSpotify,
} from "react-icons/fa";*/}



export default function Home() {
  return (
<div>
  <Head>
    <title>eshaan</title>
  </Head>

  <div className={styles.center}>
    <h2 className={styles.fonts}>eshaan tibrewala</h2>
    </div>
  <div>
  <a href='https://www.linkedin.com/in/eshaantibrewala/' target="_blank" rel="noreferrer">linkedin</a>
    </div>
    <div>
    <a href='https://github.com/etibrewala' target="_blank" rel="noreferrer">github</a>
    </div>
    <div>
      <a href="mailto: eshaantibrewala@gmail.com">email</a></div>
  </div>
  )
}
