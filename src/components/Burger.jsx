import React from 'react';
import {gsap} from 'gsap';

const Burger = () => {

    const items = [
        {id: 1, name: 'top'},
        {id: 2, name: 'middle'},
        {id: 3, name: 'bottom'}
    ]

    let x = 0

    const handleClick = ()=>{

        if( x === 0){

            x=1;
            gsap.to(".top", { css: {rotation: 45, y: 7},  duration: 1, ease: "power4.out"});
            gsap.to(".middle", { css: {opacity: 0}, duration: 1, ease: "power4.out"});
            gsap.to(".bottom", {  css: {rotation: -45, y: -7}, duration: 1, ease: "power4.out"});

        }else if (x ===1){

            x=0;
            gsap.to(".top", { css: {rotation: 0, y: 0},  duration: 1, ease: "power4.out"});
            gsap.to(".middle", { css: {opacity: 1}, duration: 1, ease: "power4.out"});
            gsap.to(".bottom", {  css: {rotation: 0, y: 0}, duration: 1, ease: "power4.out"});


        }

    }
    return (
        <div className="burger" onClick= {()=>{ handleClick()}}>
            {items.map((item=>{
                return <div key={item.id} className={item.name}></div>
            }))}
        </div>
    );
};

export default Burger;