import React, { useState } from "react";
import tours from '../media/img/tours.png'
import aiguille from '../media/img/aiguille.png'

const Speedometer = ({ size = 200, needleAngle = 0 }) => {
  const radius = size / 2;

  // Ajuster l’angle : 0° = gauche, 180° = droite
  const needleTransformAngle = needleAngle - 120;

  return (
    <div
      className="relative mx-auto"
      style={{ width: size, height: size / 2 }}
    >
      {/* Demi-cercle */}
      <div className="absolute top-0 left-0  w-full h-full ">
        <img src={tours} alt="" className="" />
      </div>

      {/* Aiguille */}

      <img src={aiguille} alt="" className="absolute   origin-bottom bottom-0  "
        style={{
        left: '47.5%' , 
          bottom: 0,
          height: radius * 0.9, // longueur de l’aiguille
          transform: `rotate(${needleTransformAngle}deg) translateX(0%) translateY(23%)`,}} />
      {/* <div
        className="absolute bg-red-500  origin-bottom bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "1px",
          height: radius * 0.9, // longueur de l’aiguille
          transform: `rotate(${needleTransformAngle}deg) translateX(-50%)`,
        }}
      ></div> */}
    </div>
  );
};

export default function Home() {
  const [angle, setAngle] = useState(0);

  return (
    <div className="p-10">
      <Speedometer size={200} needleAngle={angle} />

      {/* Contrôle de l’aiguille */}
      <input
        type="range"
        min="0"
        max="240"
        value={angle}
        onChange={(e) => setAngle(Number(e.target.value))}
        className="mt-8 w-full"
      />
    </div>
  );
}