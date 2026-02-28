import React, { useEffect, useState } from 'react';

const Capteur = () => {


    // const [mat, setMaf] = useState()
    // const [speed, setSpeed] = useState()
    // const [battery, setBattery] = useState() // Tension batterie
    // const [throttle, setThrottle] = useState() //Position du papillon
    // const [fuel_pressure, setFuel_pressure] = useState() // Pression carburant
    // const [intake_temp, setIntake_temp] = useState() // Température d’air d’admission
    // const [engine_load, setEngine_load] = useState() // Charge moteur
    // const [conso_km, setConso_km] = useState()
    // const [conso_h, setConso_h] = useState()

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch("http://localhost:5000/api/consumption");
    //         const data = await res.json();
    //         console.log(data);

    //         setMaf(data.maf_gps);
    //         setSpeed(data.speed_kmh);
    //         setBattery(data.battery_voltage);
    //         setThrottle(data.throttle_position_percent);
    //         setFuel_pressure(data.fuel_pressure_kpa);
    //         setIntake_temp(data.intake_temp_c);
    //         setEngine_load(data.engine_load_percent);
    //         setConso_km(data.consumption_l_100km)
    //         setConso_h(data.consumption_lph)
    //     };

    //     const interval = setInterval(fetchData, 1000);
    //     return () => clearInterval(interval);
    // }, []);


    return (
        <div className="container mx-auto flex justify-between">
            <div className="bg-gray-600 text-center rounded-l">
                <h3 className="p-1 bg-gray-700 text-gray-400 rounded-tl px-5 text-sm">Débit d'air</h3>
                <div className="text-orange-300 my-2 text-sm"> 12.45 g/s </div>  {/*  maf_gps Débit d'air */}
            </div>
            <div className="bg-gray-600 text-center">
                <h3 className="p-1 bg-gray-700 text-gray-400  px-5 text-sm">Vitesse km/h</h3>
                <div className="text-orange-300 my-2 text-sm"> 82 km/h </div>  {/*  speed_kmh Vitesse km/h */}
            </div>
            <div className="bg-gray-600 text-center">
                <h3 className="p-1 bg-gray-700 text-gray-400 rpx-5 text-sm">Voltage du battery</h3>
                <div className="text-orange-300 my-2 text-sm"> 14.08 v </div>  {/*  battery_voltage voltage du battery */}
            </div>
            <div className="bg-gray-600 text-center">
                <h3 className="p-1 bg-gray-700 text-gray-400  px-5 text-sm">Position du papillon</h3>
                <div className="text-orange-300 my-2 text-sm"> 22.4 %</div>  {/*  throttle_position_percent Position du papillon */}
            </div>
            <div className="bg-gray-600 text-center">
                <h3 className="p-1 bg-gray-700 text-gray-400  px-5 text-sm">Pression du carburant</h3>
                <div className="text-orange-300 my-2 text-sm"> 310.0 kpa</div>  {/*  fuel_pressure_kpa Pression carburant */}
            </div>
            <div className="bg-gray-600 text-center">
                <h3 className="p-1 bg-gray-700 text-gray-400  px-5 text-sm">Température d’air d’admission</h3>
                <div className="text-orange-300 my-2 text-sm"> 32.5 ° </div>  {/*  intake_temp_c Température d’air d’admission */}
            </div>
            <div className="bg-gray-600 text-center">
                <h3 className="p-1 bg-gray-700 text-gray-400  px-5 text-sm">Charge moteur</h3>
                <div className="text-orange-300 my-2 text-sm"> 41.3 % </div>  {/*  engine_load_percent Charge moteur */}
            </div>
            <div className="bg-gray-600 text-center">
                <h3 className="p-1 bg-gray-700 text-gray-400  px-5 text-sm">Consomation l/100km</h3>
                <div className="text-orange-300 my-2 text-sm"> 6.02 l/100km </div>  {/*  consumption_l_100km Consomation l/100km */}
            </div>
            <div className="bg-gray-600 text-center rounded-r">
                <h3 className="p-1 bg-gray-700 text-gray-400 rounded-tr px-5 text-sm">Consomation l/h</h3>
                <div className="text-orange-300 my-2 text-sm"> 3 l/h </div>  {/*  consumption_lph Consomation l/h */}
            </div>
            
            
        </div>
    );
};

export default Capteur;