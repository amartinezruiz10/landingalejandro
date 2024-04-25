import React from "react";

function Correo(){
    return(
        <div className="flex justify-between items-center border border-[#262626] bg-[#fff] rounded-[2px] px-4 sm:hidden">
            <input type="email" placeholder="Tu correo electrónico" className=" py-3 font-redhat font-medium text-[14px] leading-5 text-[#76716E]  focus:outline-none"/>
            <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.0001 7.94696C19.0016 7.94696 14.9573 4.71226 14.9573 0.722656" stroke="#262626" stroke-miterlimit="10"/>
<path d="M24.0001 7.95312C19.0016 7.95312 14.9573 11.188 14.9573 15.1836" stroke="#262626" stroke-miterlimit="10"/>
<path d="M23.3927 7.95312L0.496338 7.95312" stroke="#262626" stroke-miterlimit="10"/>
            </svg>
        </div>
    )
}

export default Correo;