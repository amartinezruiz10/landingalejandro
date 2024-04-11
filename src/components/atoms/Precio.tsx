import React from "react";

function Precio(){
    return(
        <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2 items-center">
                <p className="font-normal font-saaseriesb text-[36px] leading-[42px] tracking-[1px] text-[#262626] ">15.99€</p>
                <svg width="2" height="47" viewBox="0 0 2 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1" y1="0.87207" x2="0.999998" y2="45.8721" stroke="#262626" stroke-linecap="round"/>
                </svg>
                <p className="uppercase font-normal font-saaseriesc text-[12px] leading-[14px] tracking-[1px] text-[#6E6762]">iva incl.</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_18455_2881)">
<path d="M14.25 2.87207C16.7816 2.87207 18.8333 4.9554 18.8333 7.87207C18.8333 13.7054 12.5833 17.0387 10.5 18.2887C8.41663 17.0387 2.16663 13.7054 2.16663 7.87207C2.16663 4.9554 4.24996 2.87207 6.74996 2.87207C8.29996 2.87207 9.66663 3.7054 10.5 4.53874C11.3333 3.7054 12.7 2.87207 14.25 2.87207ZM11.2783 15.8754C12.0125 15.4121 12.675 14.9512 13.295 14.4579C15.7791 12.4829 17.1666 10.3246 17.1666 7.87207C17.1666 5.9054 15.8858 4.53874 14.25 4.53874C13.3533 4.53874 12.3833 5.01374 11.6783 5.71707L10.5 6.8954L9.32163 5.71707C8.61663 5.01374 7.64663 4.53874 6.74996 4.53874C5.13329 4.53874 3.83329 5.91874 3.83329 7.87207C3.83329 10.3254 5.22163 12.4829 7.70413 14.4579C8.32496 14.9512 8.98746 15.4121 9.72163 15.8746C9.97079 16.0321 10.2175 16.1829 10.5 16.3512C10.7825 16.1829 11.0291 16.0321 11.2783 15.8754Z" fill="#262626"/>
</g>
<defs>
<clipPath id="clip0_18455_2881">
<rect width="20" height="20" fill="white" transform="translate(0.5 0.37207)"/>
</clipPath>
</defs>
                </svg>
                <p className="font-saaseriesb font-normal text-[13px] leading-3 text-[#262626] uppercase ">añadir a favoritos</p>
            </div>
        </div>
    )
}

export default Precio;