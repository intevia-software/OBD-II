import React, { useEffect, useState } from "react";
import obdDescriptions from "../data/dtc_full.json";

function Readef() {
  const [codes, setCodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch("http://localhost:5000/api/get/default") // ton endpoint Python
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setCodes(data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.error("Erreur récupération OBD :", err);
    //     setLoading(false);
    //   });

    const data = ["P0001", "P0003", "P0004", "P0005", "P0006", "P0007", "P0008", "P0009", "P0010"]
    setCodes(data);
    setLoading(false);
    
  }, []);

  if (loading) return <p>Chargement...</p>;

  if (codes.length === 0) {
    return <p>Aucun défaut détecté ✅</p>;
  }

  return (
    <div className="w-full p-10">

        <div className="w-full p-3 bg-gray-600 text-center rounded">
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