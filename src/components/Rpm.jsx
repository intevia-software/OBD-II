import React, { useState, useEffect } from "react";
import tours from '../media/img/tours.png'
import aiguille from '../media/img/aiguille.png'

const Rpmmeter = ({ size = 200, needleAngle = 0 }) => {
    const radius = size / 2;

    // Ajuster l’angle : 0° = gauche, 180° = droite
    const needleTransformAngle = needleAngle - 120;
    const angle = -120 + (needleAngle / 5000) * 240;
  return (
    <div
      className="relative mx-auto"
      style={{ width: size, height: size  }}
    >
        {/* Demi-cercle */}
        <div className="absolute top-0 left-0  w-full h-full ">
            <img src={tours} alt="" className="" />
        </div>

        {/* Aiguille */}

        <img src={aiguille} alt="" className="absolute left-1/2   -translate-x-1/2 -translate-y-1/2  "
            style={{
            top: `${radius/1.8}px`,
            left: '47.5%' , 
            bottom: 0,
            height: radius * 0.9, // longueur de l’aiguille
            transform: `rotate(${angle}deg) translateY(-28%)`,}} />
        
        <div className="absolute bottom-2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-center  border-0 outline-none text-orange-300 font-bold text-lg" >
            {needleTransformAngle + 120}
        </div>
    
    </div>
  );
};

export default function rpm() {
      const [angle, setAngle] = useState(0);
      const [rpm, setRpm] = useState();
      const [loading, setLoading] = useState(true);
    
      // // Fonction pour récupérer les données depuis Flask
      // const fetchOBDData = async () => {
      //   try {
      //     setLoading(true);
      //     const response = await fetch("http://127.0.0.1:5000/api/get/rpm");
      //     if (!response.ok) throw new Error("Erreur serveur");
    
      //     const data = await response.json();
    
      //     setRpm(data.rpm); // true / false
      //   } catch (err) {
      //     console.error("Erreur fetch :", err);
      //     setRpm(0);
      //   } finally {
      //     setLoading(false);
      //   }
      // };
    
      // // Appel toutes les 2 secondes
      // useEffect(() => {
      //   fetchOBDData();
      //   const interval = setInterval(fetchOBDData, 100);
      //   return () => clearInterval(interval);
      // }, []);


  return (
    <div className="p-10 block">
      <Rpmmeter size={400} needleAngle={rpm} />
     
      

    </div>
  );
}