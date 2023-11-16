import Sidebar from "../components/Sidebar";
import Homepage from "./Portfolio/Hompage";
import { Route, Routes } from 'react-router-dom';
import CustomLink from "../components/CustomLink";
import Beemovie from "./Portfolio/Beemovie";

export default function Portfolio() {
    return <div className="Portfolio">
        <div className="Sidebar">
            <Sidebar>
                <CustomLink to='/portfolio'>This Site</CustomLink>
                <CustomLink to='/portfolio/beemovie'>Beemovie</CustomLink>
            </Sidebar>
        </div>
        <div className="Content">
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/beemovie' element={<Beemovie />} />
            </Routes>
        </div>
    </div>
}