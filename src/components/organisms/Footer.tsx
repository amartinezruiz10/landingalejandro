import Image from "next/image";
import React from "react";
import Novedades from "../molecules/Novedades";
import Redes from "../molecules/Redes";
import Apartados from "../molecules/Apartados";
import Links from "../molecules/Links";

function Footer(){
    return(
        <div className="px-4 pt-2 flex flex-col gap-8 mb-2 bg-[#F8F7F4] sm:flex sm:flex-row sm:justify-between sm:py-6 sm:px-[140px] sm:m-0">
            <Novedades/>
            <Redes/>
            <Apartados/>
            <Links/>
            <Image className="sm:hidden" src="/images/LogoFinal.png" alt="Ejemplo" width={343} height={60}/>
        </div>
    )
}

export default Footer;