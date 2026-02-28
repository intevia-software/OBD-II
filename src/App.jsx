import React from 'react';
import { Navigate } from "react-router-dom";
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Statebar from './components/Statebar.jsx'
import Accueil from './pages/Accueil.jsx'
import Home from './pages/Home.jsx'
import Default from './pages/Default.jsx'



const App = () => {
    return (


        <body className="bg-gray-800">
            
        
            <div className="App container-fluid">
                <div className="row">
                    <Navbar />
                </div>
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/default" element={<Default />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                
                <div className="w-full">
                    <Statebar />
                </div>
            </div>

        </body>
    );
};

export default App;