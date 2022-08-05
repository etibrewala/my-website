import Head from 'next/head';
import Link from 'next/link'
import styles from '../styles/NavBar.module.css'


const NavBar = () => {
    return(
        <main>
        <Head>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:wght@500&family=Raleway&display=swap');
            </style>
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

export default NavBar;