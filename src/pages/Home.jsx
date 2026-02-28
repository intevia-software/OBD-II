import React, { useState } from "react";
import Rpm from '../components/Rpm.jsx'
import Speed from '../components/Speed.jsx'
import Temp from '../components/Temp.jsx'
import Capteur from '../components/Capteur.jsx'


export default function Home() {
  

  return (
    <div className="block">

        <div className="flex justify-center items-end">
			<Speed />
			<Temp />
			<Rpm />
        </div>
		<div className="w-full">
			<Capteur />
		</div>
    </div>
  );
}