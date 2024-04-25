import React from "react";

function Contenido(){
    return(
        <div className="flex flex-col mb-4 sm:gap-6 marker:mb-3">
            <div className="flex flex-col gap-[13px] mb-2 sm:mb-0">
                <p className="text-[#A3988F] font-bold font-redhat text-[11px] leading-3 tracking-[2px] pb-3 uppercase ">accesorios</p>
                <p className="font-normal font-saaseriesb text-[28px] leading-7 tracking-[1px] text-[#262626] sm:hidden ">Calendario de adviento bigcrafters 2022</p>
                <p className="hidden font-normal font-saaseriesb text-[28px] leading-7 tracking-[1px] text-[#262626] sm:flex ">Beer Discovery Box</p>
            </div>
            <div className="flex flex-col sm:border-b sm:pb-8 sm:border-dashed">
                <p className="line-clamp-3 font-medium font-redhat text-[16px] leading-5 text-[#76716E] mb-8 sm:flex sm:text-[#6E6762] sm:mb-6"> Descubre cervezas diferentes cada mes, seleccionadas por el equipo de BigCrafters. Una experiencia diferente a través de la cual podrás probar distintos tipos de cerveza, desde las craft menos conocidas a las cervezas mejor valoradas. ¿Te gusta probar nuevas cervezas, pero no sabes dónde? Estás a muy poco de recibirlas en tu casa todos los meses.</p>
                <p className="hidden font-medium font-redhat text-[16px] leading-5 text-[#76716E] mb-4 sm:flex sm:text-[#6E6762]">Las cervezas incluidas en la caja del <span className="font-bold"> mes de octubre  </span>son:</p>
                <ul className="hidden font-medium font-redhat text-[16px] leading-5 text-[#76716E] mb-12 sm:flex sm:text-[#6E6762] pl-8 list-disc flex-col">
                    <li>2x Brewdog Planet Pale, 33cl botella</li>
                    <li>2x La Pirata Pils, 33cl botella</li>
                    <li>2x La Quince Roots Amber Ale, 44cl lata</li>
                </ul>
                <p className="hidden font-redhat font-medium text-[12px] leading-4 tracking-[0.3px] text-[#6E6762] mb-10 sm:flex">100 unidades en stock.</p>
                <button className="flex flex-row justify-between border border-[#262626] rounded-[50px] py-3 pl-[92px]  pr-[84px] font-normal font-saaseriesc text-[14px] leading-[16px] tracking-[1.4px] text-[#262626] sm:max-w-[224px] sm:max-h-10 sm:pl-10 sm:pr-6 sm:py-3 items-center sm:justify-start sm:gap-4 sm:">CÓMO SUSCRIBIRTE <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.50004 15.0389C4.81804 15.0389 1.83337 12.0542 1.83337 8.37223C1.83337 4.69023 4.81804 1.70557 8.50004 1.70557C12.182 1.70557 15.1667 4.69023 15.1667 8.37223C15.1667 12.0542 12.182 15.0389 8.50004 15.0389ZM8.50004 13.7056C9.91453 13.7056 11.2711 13.1437 12.2713 12.1435C13.2715 11.1433 13.8334 9.78672 13.8334 8.37223C13.8334 6.95775 13.2715 5.60119 12.2713 4.601C11.2711 3.6008 9.91453 3.0389 8.50004 3.0389C7.08555 3.0389 5.729 3.6008 4.7288 4.601C3.72861 5.60119 3.16671 6.95775 3.16671 8.37223C3.16671 9.78672 3.72861 11.1433 4.7288 12.1435C5.729 13.1437 7.08555 13.7056 8.50004 13.7056ZM7.83337 5.0389H9.16671V6.37223H7.83337V5.0389ZM7.83337 7.70557H9.16671V11.7056H7.83337V7.70557Z" fill="#262626"/>
                </svg></button>
            </div>
        </div>
    )
}

export default Contenido;