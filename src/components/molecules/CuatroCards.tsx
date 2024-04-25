import React from "react";
import Card1 from "../atoms/Cards/Card1";
import Card2 from "../atoms/Cards/Card2";
import Card3 from "../atoms/Cards/Card3";
import Card4 from "../atoms/Cards/Card4";

function CuatroCards(){
    return(
        <div className="flex flex-col">
            <div className="sm:flex sm:flex-row sm:w-full">
                <Card1/>
                <Card2/>
            </div>
            <div className="sm:flex sm:flex-row sm:w-full">
                <Card3/>
                <Card4/>
            </div>
        </div>
    )
}

export default CuatroCards;