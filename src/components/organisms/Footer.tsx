import Image from "next/image";
import React from "react";
import Novedades from "../molecules/Novedades";
import Redes from "../molecules/Redes";
import Apartados from "../molecules/Apartados";
import Links from "../molecules/Links";

function Footer(){
    return(
        <div className="px-4 pt-2 flex flex-col gap-8 mb-2 bg-[#F8F7F4]">
            <Novedades/>
            <Redes/>
            <svg width="328" height="2" viewBox="0 0 328 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.533203" x2="328" y2="0.533203" stroke="#262626" stroke-dasharray="2 2"/>
            </svg>
            <Apartados/>
            <svg width="328" height="2" viewBox="0 0 328 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.533203" x2="328" y2="0.533203" stroke="#262626" stroke-dasharray="2 2"/>
            </svg>
            <Links/>
            <Image src="/images/LogoFinal.png" alt="Ejemplo" width={343} height={60}/>
        </div>
    )
}

export default Footer;