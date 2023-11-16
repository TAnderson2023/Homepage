import './navbar.css'
export default function Navbar({children, author}) {
    return <nav className="nav">
        <ul>
            {children}
        </ul>
        <p className='author' style={{display: !author ? 'none' : ''}}>{author}</p>
    </nav>
}
