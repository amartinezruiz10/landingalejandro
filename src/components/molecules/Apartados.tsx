import React from "react";
import Image from "next/image";
import Apartado1 from "../atoms/Apartados/Apartado1";
import Apartado2 from "../atoms/Apartados/Apartado2";

function Apartados(){
    return(
        <div className="flex flex-row gap-9 border-t border-dashed pt-8 sm:border-t-0 sm:gap-[68px] sm:p-0">
            <Apartado1/>
            <Apartado2/>
            <div className="hidden sm:flex flex-col justify-between sm:w-1/3">
                <div className="hidden sm:flex flex-col gap-6">
                    <p className="font-saaseriesb font-normal text-[19px] leading-[19px] uppercase text-[#262626]">contacto</p>
                    <p className="font-saaseriesb font-normal text-[19px] leading-[19px] uppercase text-[#262626]">ayuda</p>
                    <p className="font-saaseriesb font-normal text-[19px] leading-[19px] uppercase text-[#262626]">infomrción entregas</p>
                    <p className="font-saaseriesb font-normal text-[19px] leading-[19px] uppercase text-[#262626]">devoluciones</p>
                    <p className="font-saaseriesb font-normal text-[19px] leading-[19px] uppercase text-[#262626]">dudas sobre mi pedido</p>
                </div>
                <Image className="hidden sm:flex" src="/images/LogoPcFinal.png" alt="Ejemplo" width={176} height={44}/>
            </div>
        </div>
    )
}

export default Apartados;