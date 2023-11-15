import CustomLink from "./CustomLink"
export default function Navbar() {
    return <nav className="nav">
        <ul>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/portfolio'>Portfolio</CustomLink>
            <CustomLink to='/news'>News</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
        </ul>
        <p className="author">TRISTAN ANDERSON</p>
    </nav>
}
