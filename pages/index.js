import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import circles from '../styles/bubbles.module.css'
import NavBar from '../components/navBar'



export default function Home() {

  const gh = "gh"
  return (
  <main>
    <div>
    <Head>
      <title>eshaan</title>
    </Head>
    <NavBar/>
    </div>
    <div>
      <h1>Eshaan Tibrewala</h1>
      <a href='https://www.linkedin.com/in/eshaantibrewala/' target="_blank" rel="noreferrer">linkedin</a>
      <a href='https://github.com/etibrewala' target="_blank" rel="noreferrer">github</a>
      <a href="mailto:eshaantibrewala@gmail.com">email</a>
    </div>
    
{/*
  <div className={styles.bubbleButtons}></div>
 <div className={styles.bubbles}>
  <div className={styles.gh}>
    <a href='https://www.linkedin.com/in/eshaantibrewala/' target="_blank">{gh}</a>    
  </div>
  
 </div>
 
  <div>
    <a href='https://github.com/etibrewala' target="_blank" rel="noreferrer">github</a>
  </div>
  <div>
    <a href="mailto:eshaantibrewala@gmail.com">email</a>
  </div>
  <div className={styles.bubbles}></div>
  */}
    
  </main>
  )
}
