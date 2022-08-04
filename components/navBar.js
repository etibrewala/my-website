import Link from 'next/link'

const NavBar = () => {
    return(
        <div>
            <Link href="/"><a>eshaan</a></Link>
            <Link href="/about"><a>about</a></Link>
            <Link href="/resume"><a>resume</a></Link>
            <Link href="/projects"><a>projects</a></Link>
            <Link href="/photos"><a>photos</a></Link>
        </div>
    )
}

export default NavBar;