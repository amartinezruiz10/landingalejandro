import React from "react";

function Contenido(){
    return(
        <div className="flex flex-col mb-4">
            <div className="flex flex-col gap-[13px] mb-2">
                <p className="text-[#A3988F] font-bold font-redhat text-[11px] leading-3 tracking-[2px] uppercase ">accesorios</p>
                <p className="font-normal font-saaseriesb text-[28px] leading-7 tracking-[1px] text-[#262626] ">Calendario de adviento bigcrafters 2022</p>
            </div>
            <div className="flex flex-col">
                <p className="line-clamp-3 font-medium font-redhat text-[16px] leading-5 text-[#76716E] mb-8 "> Descubre cervezas diferentes cada mes, seleccionadas por el equipo de BigCrafters. Una experiencia diferente a través de la cual podrás probar distintos tipos de cerveza, desde las craft menos conocidas a las cervezas mejor valoradas. ¿Te gusta probar nuevas cervezas, pero no sabes dónde? Estás a muy poco de recibirlas en tu casa todos los meses.</p>
                <button className="flex flex-row justify-between border border-[#262626] rounded-[50px] py-3 pl-[92px]  pr-[84px] font-normal font-saaseriesc text-[14px] leading-[16px] tracking-[1.4px] text-[#262626] mb-4 ">COMO SUSCRIBIRTE <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.50004 15.0389C4.81804 15.0389 1.83337 12.0542 1.83337 8.37223C1.83337 4.69023 4.81804 1.70557 8.50004 1.70557C12.182 1.70557 15.1667 4.69023 15.1667 8.37223C15.1667 12.0542 12.182 15.0389 8.50004 15.0389ZM8.50004 13.7056C9.91453 13.7056 11.2711 13.1437 12.2713 12.1435C13.2715 11.1433 13.8334 9.78672 13.8334 8.37223C13.8334 6.95775 13.2715 5.60119 12.2713 4.601C11.2711 3.6008 9.91453 3.0389 8.50004 3.0389C7.08555 3.0389 5.729 3.6008 4.7288 4.601C3.72861 5.60119 3.16671 6.95775 3.16671 8.37223C3.16671 9.78672 3.72861 11.1433 4.7288 12.1435C5.729 13.1437 7.08555 13.7056 8.50004 13.7056ZM7.83337 5.0389H9.16671V6.37223H7.83337V5.0389ZM7.83337 7.70557H9.16671V11.7056H7.83337V7.70557Z" fill="#262626"/>
                </svg></button>
                <svg width="329" height="2" viewBox="0 0 329 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="0.87207" x2="328.5" y2="0.872099" stroke="#262626" stroke-dasharray="2 2"/>
                </svg>
            </div>
        </div>
    )
}

export default Contenido;