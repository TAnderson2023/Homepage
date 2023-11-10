import Sidebar from "../components/Sidebar";
import Homepage from "./Portfolio/Hompage";
import { Route, Routes } from 'react-router-dom';

export default function Portfolio() {
    return <div className="Portfolio">
        <div className="Sidebar">
            <Sidebar></Sidebar>
        </div>
        <div className="Content">
            <Routes>
                <Route path='/' element={<Homepage />} />
            </Routes>
        </div>
    </div>
}