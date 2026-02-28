import React from 'react';
import icon from '../media/img/man.png'


const Accueil = () => {
    return (
        <div className="container mx-auto  flex justify-center items-center py-64">
            <div className="text-center">
                <img src={icon} alt="" className="w-64 p-5 border border-gray-900 rounded-full bg-gray-900" />
                <h1 className="text-gray-400 text-2xl font-bold my-5">LORNE SYSTEME</h1>
            </div>
        </div>
    );
};

export default Accueil;