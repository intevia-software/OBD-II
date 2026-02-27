import React, { useState, useEffect } from "react";
import vitesse from '../media/img/vitesse.png'
import aiguille from '../media/img/aiguille.png'

const Speedometer = ({ size = 200, needleAngle = 0 }) => {
    const radius = size / 2;

    // Ajuster l’angle : 0° = gauche, 180° = droite
    const needleTransformAngle = needleAngle - 144;
    const angle = -144 + (needleAngle / 240) * 288;
  return (
    <div
      className="relative mx-auto"
      style={{ width: size, height: size  }}
    >
        {/* Demi-cercle */}
        <div className="absolute top-0 left-0  w-full h-full ">
            <img src={vitesse} alt="" className="" />
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
            {needleTransformAngle + 144}
        </div>
    
    </div>
  );
};

export default function Speed() {
      const [angle, setAngle] = useState(0);
      const [loading, setLoading] = useState(true);
      const [speed, setSpeed] = useState();
    
      // // Fonction pour récupérer les données depuis Flask
      // const fetchOBDSpeed = async () => {
      //   try {
      //     setLoading(true);
      //     const response = await fetch("http://127.0.0.1:5000/api/get/speed");
      //     if (!response.ok) throw new Error("Erreur serveur");
    
      //     const data = await response.json();
    
      //     setSpeed(data.speed); // true / false
      //   } catch (err) {
      //     console.error("Erreur fetch :", err);
      //     setSpeed(0);
      //   } finally {
      //     setLoading(false);
      //   }
      // };
    
      // // Appel toutes les 2 secondes
      // useEffect(() => {
      //   fetchOBDSpeed();
      //   const interval = setInterval(fetchOBDSpeed, 100);
      //   return () => clearInterval(interval);
      // }, []);


  return (
    <div className="p-10 block">
      <Speedometer size={400} needleAngle={speed} />
       


      

    </div>
  );
}