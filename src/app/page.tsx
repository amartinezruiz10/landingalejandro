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
      <Image className="w-full bg-[#ECE7E1]" src="/images/divider1.png" alt="Ejemplo" width={375} height={18}/>
      <Products/>
      <ComoFunciona/>
      <Accordeon/>
      <Image className="w-full bg-[#F8F7F4] mb-[-1px]" src="/images/divider2.png" alt="Ejemplo" width={375} height={18}/>
      <Scrollbar/>
      <Image className="w-full bg-[#F8F7F4]" src="/images/divider3.png" alt="Ejemplo" width={375} height={18}/>
      <BeerDiscovery/>
      <Footer/>
      <FinalFooter/>
    </main>
  );
}

