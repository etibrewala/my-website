import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/NavBar.module.css'


export default function NavBar() {
    return(
        <main>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"/>
        </Head>
        <div className={styles.navbar}>
        <div className={styles.mainlink}>
            <Link href="/"><a>eshaan</a></Link>
        </div>
        <div className={styles.links}>
            <div>
            <Link href="/about"><a>about</a></Link>    
            </div>
            <div>
            <Link href="/resume"><a>resume</a></Link>    
            </div>
            <div>
            <Link href="/projects"><a>projects</a></Link> 
            </div>
            <div>
            <Link href="/photos"><a>photos</a></Link>  
            </div>
        </div>
        </div>
        </main>
    )
}