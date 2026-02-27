import React, { useState } from "react";
import Rpm from '../components/Rpm.jsx'
import Speed from '../components/Speed.jsx'


export default function Home() {
  

  return (
    <div className=" flex justify-center">
        <Speed />
        <Rpm />
    </div>
  );
}