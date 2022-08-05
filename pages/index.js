import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import circles from '../styles/bubbles.module.css'
import NavBar from '../components/navBar'



export default function Home() {

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
  </main>
  )
  
}
