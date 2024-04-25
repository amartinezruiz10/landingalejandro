import React from "react";
import "./globals.css";
import Navbar from "@/components/organisms/Navbar";
import Header from "@/components/organisms/Header";
import Products from "@/components/organisms/Products";
import ComoFunciona from "@/components/organisms/ComoFunciona";
import Accordeon from "@/components/organisms/Accordeon";
import BeerDiscovery from "@/components/organisms/BeerDiscovery";
import Footer from "@/components/organisms/Footer";
import FinalFooter from "@/components/atoms/FinalFooter";
import Image from "next/image";
import Scrollbar from "@/components/organisms/Scrollbar";

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <Navbar/>
      <Header/>
      <Image className="w-full bg-[#ECE7E1] sm:hidden" src="/images/divider1.png" alt="Ejemplo" width={375} height={18}/>
      <Image className="hidden w-full bg-[#ECE7E1] sm:flex sm:mt-[-1px]" src="/images/divider1pcc.png" alt="Ejemplo" width={1440} height={16}/>
      <Products/>
      <ComoFunciona/>
      <Accordeon/>
      <Image className="w-full bg-[#F8F7F4] mb-[-1px] sm:hidden" src="/images/divider2.png" alt="Ejemplo" width={375} height={18}/>
      <Image className="hidden w-full bg-[#F8F7F4] sm:flex sm:mb-[-1px]" src="/images/divider2pcc.png" alt="Ejemplo" width={1440} height={16}/>
      <Scrollbar/>
      <Image className="w-full bg-[#F8F7F4] sm:hidden" src="/images/divider3.png" alt="Ejemplo" width={375} height={18}/>
      <Image className="hidden w-full bg-[#F8F7F4] sm:flex sm:mt-[-3px]" src="/images/divider3pcc.png" alt="Ejemplo" width={1440} height={16}/>
      <BeerDiscovery/>
      <Image className="hidden bg-[#F8F7F4] sm:flex sm:px-[140px] " src="/images/LineaFoooter.png" alt="Ejemplo" width={1440} height={16}/>
      <Footer/>
      <FinalFooter/>
    </main>
  );
}

