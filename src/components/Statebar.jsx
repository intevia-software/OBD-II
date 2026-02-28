import React from 'react';
import OBDStatus from './OBDStatus.jsx'

const Statebar = () => {
    return (
        <div className="w-full flex justify-end absolute bottom-0 left-0 bg-gray-900 border-t border-gray-700 px-10">
            <OBDStatus />
        </div>
    );
};

export default Statebar;