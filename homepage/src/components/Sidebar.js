import { Link, useMatch, useResolvedPath} from 'react-router-dom'

export default function Sidebar() {
    return <div className='side'>
        <ul>
            <CustomLink to='/portfolio'>This Site</CustomLink>
        </ul>
    </div>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}