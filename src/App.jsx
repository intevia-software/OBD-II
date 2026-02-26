import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Statebar from './components/Statebar.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'


const App = () => {
    return (


        <body className="bg-gray-800">
            
        
            <div className="App container-fluid">
                <div className="row">
                    <Navbar />
                </div>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <div className="w-full">
                    <Statebar />
                </div>
            </div>

        </body>
    );
};

export default App;