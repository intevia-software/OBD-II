import React, { useEffect, useState } from "react";

const Deletedef = () => {
    const [message, setMessage] = useState();
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState(false);
    
    //   Fonction pour récupérer les données depuis Flask
    //   const fetchOBDConnexion = async () => {
    //     try {
    //       setLoading(true);
    //       const response = await fetch("http://127.0.0.1:5000/api/delete/default");
    //       if (!response.ok) throw new Error("Erreur serveur");
    
    //       const data = await response.json();
    //       setState(true);
    //       setMessage(data.message); 
    //     } catch (err) {
    //       console.error("Erreur fetch :", err);
    //       setState(false);
    //       setMessage('Erreur de connexion');
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
    
      // Appel toutes les 2 secondes
      useEffect(() => {

        // fetchOBDConnexion();
        setMessage('message de delete')

      }, []);

    

    return (
        <div className="w-full">
            <button className="w-full p-3 bg-green-700 text-gray-100 rounded test-sm">Effacer default</button>
            <div className={`bg-gray-700 ${ state ? "text-green-500" : "text-red-500" } p-3 w-full my-5 italic rounded`}>
                {message}
            </div>
        </div>
    );
};

export default Deletedef;