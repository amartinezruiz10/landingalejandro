import React from "react";
import Image from "next/image";
import MainHeader from "../molecules/MainHeader";


function Header() {
    return(
        <div className="flex flex-col pt-10 px-4 bg-[#ECE7E1] sm:px-[140px] sm:pt-8 sm:flex sm:flex-row sm:justify-between ">
            <MainHeader/>
            <Image className="md:hidden " src="/images/Bodegon.png" alt="Ejemplo" width={343} height={512}/>
            <Image className="hidden md:flex md:w-2/3 " src="/images/Bodegon.png" alt="Ejemplo" width={831} height={610}/>
        </div>  
    )
}

export default Header;