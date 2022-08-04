import Head from "next/head"
import NavBar from "../components/navBar"


export default function Project(){
    return(
        <main>
            <div>
            <Head>
                <title>resume</title>
            </Head>
            <NavBar/>
            </div>
            <h1>resume page incoming</h1>
            <a href="/static/Resume.pdf" target="_blank">resume</a>
        </main>
    )
}