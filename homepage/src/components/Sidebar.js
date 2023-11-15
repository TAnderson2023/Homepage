import CustomLink from "./CustomLink"

export default function Sidebar() {
    return <div className='side'>
        <ul>
            <CustomLink to='/portfolio'>This Site</CustomLink>
        </ul>
    </div>
}
