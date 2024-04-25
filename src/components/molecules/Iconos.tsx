import React from "react";
import Lupa from "../atoms/Lupa";
import InicioSesion from "../atoms/InicioSesion";
import Carrito from "../atoms/Carrito";
import Image from "next/image";

function Iconos() {
    return(
        <div className="flex flex-row items-center gap-5 py-3 sm:py-4 sm:justify-between">
            <div className="hidden sm:flex sm:flex-row sm:gap-[95px]">
                <div className="flex flex-row gap-12">
                    <p className="font-saaseriesb font-normal text-[19px] leading-[19px] text-[#262626] uppercase">cerveza y bebidas</p>
                    <p className="font-saaseriesb font-normal text-[19px] leading-[19px] text-[#262626] uppercase">nuestra selección</p>
                    <p className="font-saaseriesb font-normal text-[19px] leading-[19px] text-[#262626] uppercase">experiencias</p>
                </div>
                <Image src="/images/logopositivo.png" alt="Ejemplo" width={160} height={40}/>
                <div className="flex flex-row gap-12">
                    <p className="font-saaseriesb font-normal text-[19px] leading-[19px] text-[#262626] uppercase">accesorios</p>
                    <p className="font-saaseriesb font-normal text-[19px] leading-[19px] text-[#262626] uppercase">compra recurrente</p>
                    <div className="flex flex-row items-start gap-5">
                        <Lupa/>
                        <InicioSesion/>
                        <Carrito/>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center gap-5 sm:hidden">
            <Lupa/>
            <InicioSesion/>
            <Carrito/>
            </div>
        </div> 
    )
}

export default Iconos;