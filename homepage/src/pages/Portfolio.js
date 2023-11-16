import Sidebar from "../components/Sidebar";
import Homepage from "./Portfolio/Hompage";
import { Route, Routes } from 'react-router-dom';
import CustomLink from "../components/CustomLink";

export default function Portfolio() {
    return <div className="Portfolio">
        <div className="Sidebar">
            <Sidebar>
                <CustomLink to='/portfolio'>This Site</CustomLink>
                <CustomLink to='/portfolio'>Test</CustomLink>
                <CustomLink to='/portfolio'>Test2</CustomLink>
                <CustomLink to='/portfolio'>Test3</CustomLink>
                <CustomLink to='/portfolio'>Test4</CustomLink>
                <CustomLink to='/portfolio'>Test5</CustomLink>
                <CustomLink to='/portfolio'>Test6</CustomLink>
            </Sidebar>
        </div>
        <div className="Content">
            <Routes>
                <Route path='/' element={<Homepage />} />
            </Routes>
        </div>
    </div>
}