import Image from "next/image";
import React from "react";


function UltimasNovedades(){
    return(
        <div className="flex flex-row gap-5">
            <Image src="/images/taza.png" alt="Ejemplo" width={95} height={135}/>
            <div className="flex flex-col gap-2 pt-8 w-2/3">
                <svg width="228" height="2" viewBox="0 0 228 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="1.45312" x2="228" y2="1.45312" stroke="#262626" stroke-dasharray="2 2"/>
                </svg>
                <p className="font-saaseriesb font-normal text-[28px] leading-7 tracking-[1px] text-[#262626] uppercase">Entérate de las últimas novedades</p>
                <p className="font-redhat font-medium text-[12px] leading-4 tracking-[0.3px] text-[#76716E]">Descubre los últimos productos de nuestra tienda online</p>
            </div>
        </div>
    )
}

export default UltimasNovedades;