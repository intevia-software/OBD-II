import React, { useEffect, useState } from 'react';
import Rpm from '../components/Rpm.jsx'
import Speed from '../components/Speed.jsx'
import Temp from '../components/Temp.jsx'

const Capteur = () => {


    const [rpm, setRpm] = useState()
    const [temp, setTemp] = useState()
    const [maf, setMaf] = useState()
    const [speed, setSpeed] = useState()
    const [battery, setBattery] = useState() // Tension batterie
    const [throttle, setThrottle] = useState() //Position du papillon
    const [fuel_pressure, setFuel_pressure] = useState() // Pression carburant
    const [intake_temp, setIntake_temp] = useState() // Température d’air d’admission
    const [engine_load, setEngine_load] = useState() // Charge moteur
    const [conso_km, setConso_km] = useState()
    const [conso_h, setConso_h] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://127.0.0.1:5000/api/consumption");
            const data = await res.json();
            console.log(data);

            setRpm(data.rpm);
            setTemp(data.temp);
            setMaf(data.maf_gps);
            setSpeed(data.speed_kmh);
            setBattery(data.battery_voltage);
            setThrottle(data.throttle_position_percent);
            setFuel_pressure(data.fuel_pressure_kpa);
            setIntake_temp(data.intake_temp_c);
            setEngine_load(data.engine_load_percent);
            setConso_km(data.consumption_l_100km)
            setConso_h(data.consumption_lph)
        };

        const interval = setInterval(fetchData, 500);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="container mx-auto ">

            <div className="flex justify-center items-end">
                <Speed  speed={speed}/>
                <Temp temp={temp} />
                <Rpm rpm={rpm} /> 
            </div>

            <div className="w-full flex justify-between">
                <div className="bg-gray-600 text-center rounded-l">
                    <h3 className="p-1 bg-gray-700 text-gray-400 rounded-tl px-5 text-sm">Regime moteur</h3>
                    <div className="text-orange-300 my-2 text-sm"> {rpm} x1000/min </div>  {/*  maf_gps Débit d'air */}
                </div>
                <div className="bg-gray-600 text-center rounded-l">
                    <h3 className="p-1 bg-gray-700 text-gray-400 rounded-tl px-5 text-sm">Températeur moteur</h3>
                    <div className="text-orange-300 my-2 text-sm"> {temp} ° </div>  {/*  maf_gps Débit d'air */}
                </div>
                <div className="bg-gray-600 text-center rounded-l">
                    <h3 className="p-1 bg-gray-700 text-gray-400 rounded-tl px-5 text-sm">Débit d'air</h3>
                    <div className="text-orange-300 my-2 text-sm"> {maf} g/s </div>  {/*  maf_gps Débit d'air */}
                </div>
                <div className="bg-gray-600 text-center">
                    <h3 className="p-1 bg-gray-700 text-gray-400  px-5 text-sm">Vitesse km/h</h3>
                    <div className="text-orange-300 my-2 text-sm"> {speed} km/h </div>  {/*  speed_kmh Vitesse km/h */}
                </div>
                <div className="bg-gray-600 text-center">
                    <h3 className="p-1 bg-gray-700 text-gray-400 rpx-5 text-sm">Voltage du battery</h3>
                    <div className="text-orange-300 my-2 text-sm"> {battery} v </div>  {/*  battery_voltage voltage du battery */}
                </div>
                <div className="bg-gray-600 text-center">
                    <h3 className="p-1 bg-gray-700 text-gray-400  px-5 text-sm">Position du papillon</h3>
                    <div className="text-orange-300 my-2 text-sm"> {throttle} %</div>  {/*  throttle_position_percent Position du papillon */}
                </div>
                <div className="bg-gray-600 text-center">
                    <h3 className="p-1 bg-gray-700 text-gray-400  px-5 text-sm">Pression du carburant</h3>
                    <div className="text-orange-300 my-2 text-sm"> {fuel_pressure} kpa</div>  {/*  fuel_pressure_kpa Pression carburant */}
                </div>
                <div className="bg-gray-600 text-center">
                    <h3 className="p-1 bg-gray-700 text-gray-400  px-5 text-sm">Température d’air d’admission</h3>
                    <div className="text-orange-300 my-2 text-sm"> {intake_temp} ° </div>  {/*  intake_temp_c Température d’air d’admission */}
                </div>
                <div className="bg-gray-600 text-center">
                    <h3 className="p-1 bg-gray-700 text-gray-400  px-5 text-sm">Charge moteur</h3>
                    <div className="text-orange-300 my-2 text-sm"> {engine_load} % </div>  {/*  engine_load_percent Charge moteur */}
                </div>
                <div className="bg-gray-600 text-center">
                    <h3 className="p-1 bg-gray-700 text-gray-400  px-5 text-sm">Consomation l/100km</h3>
                    <div className="text-orange-300 my-2 text-sm"> {conso_km} l/100km </div>  {/*  consumption_l_100km Consomation l/100km */}
                </div>
                <div className="bg-gray-600 text-center rounded-r">
                    <h3 className="p-1 bg-gray-700 text-gray-400 rounded-tr px-5 text-sm">Consomation l/h</h3>
                    <div className="text-orange-300 my-2 text-sm"> {conso_h} l/h </div>  {/*  consumption_lph Consomation l/h */}
                </div>
                
            </div>
        </div>
    );
};

export default Capteur;