import CustomLink from "./CustomLink";

import './sidebar.css'
export default function Sidebar() {
    return <div className='side'>
        <ul>
            <CustomLink to='/portfolio'>This Site</CustomLink>
        </ul>
    </div>
}
