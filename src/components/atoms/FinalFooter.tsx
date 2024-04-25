import React from "react";

function FinalFooter(){
    return(
        <div className="w-full py-2 bg-[#262626] flex justify-center items-center sm:flex sm:flex-row sm:px-[140px] sm:py-[18px] sm:justify-between sm:items-center ">
            <div className="hidden sm:flex sm:flex-row sm:gap-[50px]">
                <p className="font-saaseriesc font-medium text-[12px] leading-3 text-[#F8F7F4] tracking-[1px] uppercase">Preguntas frecuentes</p>
                <p className="font-saaseriesc font-medium text-[12px] leading-3 text-[#F8F7F4] tracking-[1px] uppercase">Contacto</p>
                <p className="font-saaseriesc font-medium text-[12px] leading-3 text-[#F8F7F4] tracking-[1px] uppercase">Aviso legal</p>
                <p className="font-saaseriesc font-medium text-[12px] leading-3 text-[#F8F7F4] tracking-[1px] uppercase">Política de Privacidad</p>
                <p className="font-saaseriesc font-medium text-[12px] leading-3 text-[#F8F7F4] tracking-[1px] uppercase">Cookies</p>
                <p className="font-saaseriesc font-medium text-[12px] leading-3 text-[#F8F7F4] tracking-[1px] uppercase">Condiciones generales de compra</p>
            </div>
            <p className="font-saaseriesb font-normal text-[12px] leading-[14px] tracking-[1px] items-center uppercase text-[#F8F7F4]">BIGCRAFTERS ©2022</p>
        </div>
    )
}

export default FinalFooter;