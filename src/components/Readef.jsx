import React, { useEffect, useState } from "react";
import obdDescriptions from "../data/dtc_full.json";

function Readef() {
  const [codes, setCodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
        fetch("http://localhost:5000/api/get/default") // ton endpoint Python
        .then((res) => res.json())
        .then((data) => {
            setCodes(data);
            setLoading(false);
        })
        .catch((err) => {
            console.error("Erreur récupération OBD :", err);
            setLoading(false);
        });

   
        
    
  }, []);

  if (loading) return (

        <div className="w-full py-10">

            <div className="w-full p-3 bg-gray-600 text-center rounded">
                <h2 className="text-gray-300 text-lg">Chargement...</h2>
            </div>
        </div>
    
    );

  if (codes.length === 0) {
    return (

        <div className="w-full py-10">

            <div className="w-full p-3 bg-gray-700 text-center rounded">
                <h2 className="text-gray-300 text-lg">Aucun défaut détecté ✅</h2>
            </div>
        </div>
    
    );
  }

  return (
    <div className="w-full py-10">

        <div className="w-full p-3 bg-gray-700 text-center rounded">
            <h2 className="text-gray-300 text-lg">Codes défaut détectés :</h2>
        </div>
      
        <div className="w-full mt-5 bg-gray-700 p-3 rounded">

            <ul>
                {codes.map((code, index) => (
                <li key={index}>
                    <strong className="text-red-500">{code}</strong> —{" "}
                    <span className="text-red-300">{obdDescriptions[code] || "Description inconnue"}</span>
                </li>
                ))}
            </ul>

        </div>
    </div>
  );
}

export default Readef;