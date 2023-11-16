import './sidebar.css'
export default function Sidebar({children}) {
    return <div className='side'>
        <ul>
            {children}
        </ul>
    </div>
}
