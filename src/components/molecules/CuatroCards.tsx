import React from "react";
import Card1 from "../atoms/Cards/Card1";
import Card2 from "../atoms/Cards/Card2";
import Card3 from "../atoms/Cards/Card3";
import Card4 from "../atoms/Cards/Card4";

function CuatroCards(){
    return(
        <div className="flex flex-col gap-4">
            <Card1/>
            <svg width="343" height="2" viewBox="0 0 343 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="-4.37114e-08" y1="0.87207" x2="343" y2="0.87204" stroke="#262626" stroke-dasharray="2 2"/>
            </svg>
            <Card2/>
            <svg width="343" height="2" viewBox="0 0 343 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="-4.37114e-08" y1="0.87207" x2="343" y2="0.87204" stroke="#262626" stroke-dasharray="2 2"/>
            </svg>
            <Card3/>
            <svg width="343" height="2" viewBox="0 0 343 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="-4.37114e-08" y1="0.87207" x2="343" y2="0.87204" stroke="#262626" stroke-dasharray="2 2"/>
            </svg>
            <Card4/>
        </div>
    )
}

export default CuatroCards;