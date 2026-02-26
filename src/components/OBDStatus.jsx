import React, { useState, useEffect } from "react";

function OBDStatus() {
  const [connexion, setConnexion] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fonction pour récupérer les données depuis Flask
  const fetchOBDData = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:5000/api/get/connexion");
      if (!response.ok) throw new Error("Erreur serveur");

      const data = await response.json();

      setConnexion(data.connexion || false); // true / false
    } catch (err) {
      console.error("Erreur fetch :", err);
      setConnexion(false);
    } finally {
      setLoading(false);
    }
  };

  // Appel toutes les 2 secondes
  useEffect(() => {
    fetchOBDData();
    const interval = setInterval(fetchOBDData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-x-5 text-gray-100 py-3">
      

      {loading ? (
        <p>Chargement...</p>
      ) : (
        <>
          <p>
            Connexion :{" "}
            <strong style={{ color: connexion ? "green" : "red" }}>
              {connexion ? " 🟢" : " 🔴"}
            </strong>
          </p>

          
        </>
      )}
    </div>
  );
}

export default OBDStatus;