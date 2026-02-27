import React, { useState } from "react";
import Rpm from '../components/Rpm.jsx'
import Speed from '../components/Speed.jsx'
import Temp from '../components/Temp.jsx'


export default function Home() {
  

  return (
    <div className=" flex justify-center items-end">
        <Speed />
        <Temp />
        <Rpm />
    </div>
  );
}