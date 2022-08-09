import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import circles from '../styles/bubbles.module.css'
import NavBar from '../components/navBar'



export default function Home() {

  return (
  <main>
    <div>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" 
            crossOrigin/>
      <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap" 
            rel="stylesheet"/>
      <title>eshaan</title>
    </Head>
    <NavBar/>
    </div>
    <div className={styles.main}>
      <div className={styles.name}>
        <div>eshaan</div>
        <div>tibrewala</div>
      </div>
      <div className={styles.bubbles}></div>
      <div className={styles.bubbles}>
      <a href='https://www.linkedin.com/in/eshaantibrewala/' target="_blank" rel="noreferrer"></a>
      <a href='https://github.com/etibrewala' target="_blank" rel="noreferrer"></a>
      <a href="mailto:eshaantibrewala@gmail.com"></a>
      </div>
    </div>
  </main>
  )

}
