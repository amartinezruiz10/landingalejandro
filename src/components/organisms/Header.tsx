import React from "react";
import Image from "next/image";
import MainHeader from "../molecules/MainHeader";


function Header() {
    return(
        <div className="relative flex flex-col pt-10 px-4 bg-[#ECE7E1]">
            <MainHeader/>
            <Image src="/images/Header.png" alt="Ejemplo" width={343} height={512}/>
        </div>  
    )
}

export default Header;