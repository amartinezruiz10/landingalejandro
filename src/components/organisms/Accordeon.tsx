import React from "react";
import Preguntas from "../molecules/Preguntas";

function Accordeon(){
    return(
        <div className="p-6 bg-[#F8F7F4] flex flex-col gap-4">
            <div>
                <p className="flex justify-center font-saaseriesb font-normal text-[28px] leading-7 tracking-[1px] items-center text-[#262626] uppercase ">preguntas frecuentes</p>
            </div>
            <Preguntas/>
        </div>
    )
}

export default Accordeon;