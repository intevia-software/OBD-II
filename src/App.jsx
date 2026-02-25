import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
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
                    <Route path="/About" element={<About />} />
                </Routes>
            </div>
        </body>
    );
};

export default App;