import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Statebar from './components/Statebar.jsx'
import Accueil from './pages/Accueil.jsx'
import Home from './pages/Home.jsx'
import Default from './pages/Default.jsx'
import Info from './pages/Info.jsx'



const App = () => {

    const location = useLocation();
    const isSettings = location.pathname === "/info";

    return (


        <div className="bg-gray-800">
            
        
            <div className=" container-fluid">
                {/* Navbar seulement si pas settings */}
                {!isSettings && (
                    <div className="row">
                    <Navbar />
                    </div>
                )}
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/default" element={<Default />} />
                    <Route path="/info" element={<Info />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                
                {!isSettings && (
                    <div className="w-full">
                    <Statebar />
                    </div>
                )}
            </div>

        </div>
    );
};

export default App;