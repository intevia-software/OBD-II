import React, { useEffect, useState } from "react";
import obdDescriptions from "../data/dtc_full.json";

function Readef() {
  const [codes, setCodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/get/default");

      if (!response.ok) {
        throw new Error("Erreur serveur");
      }

      const data = await response.json();

      // Vérifie que data est bien un tableau
      if (Array.isArray(data)) {
        setCodes(data);
      } else {
        console.warn("Format inattendu :", data);
        setCodes([]);
      }
    } catch (err) {
      console.error("Erreur récupération OBD :", err);
      setError("Impossible de récupérer les données.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full py-10">
        <div className="w-full p-3 bg-gray-600 text-center rounded">
          <h2 className="text-gray-300 text-lg">Chargement...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-10">
        <div className="w-full p-3 bg-red-700 text-center rounded">
          <h2 className="text-white text-lg">{error}</h2>
        </div>
      </div>
    );
  }

  if (codes.length === 0) {
    return (
      <div className="w-full py-10">
        <div className="w-full p-3 bg-gray-700 text-center rounded">
          <h2 className="text-gray-300 text-lg">
            Aucun défaut détecté ✅
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-10">
      <div className="w-full p-3 bg-gray-700 text-center rounded">
        <h2 className="text-gray-300 text-lg">
          Codes défaut détectés :
        </h2>
      </div>

      <div className="w-full mt-5 bg-gray-700 p-3 rounded">
        <ul>
          {codes.map((code) => (
            <li key={code} className="mb-2">
              <strong className="text-red-500">{code}</strong> —{" "}
              <span className="text-red-300">
                {obdDescriptions[code] || "Description inconnue"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Readef;