'use client'
import React from 'react';
import { Leaf } from "lucide-react";
export default function HeroSection() {
  return (
    <section 
      className="relative h-[16rem] md:h-[25rem] lg:h-[40rem] p-8 bg-cover bg-center w-full flex items-center"
      style={{ backgroundImage: "url('/Img/newsolar.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30"></div> 
      
      {/* Text Content */}
      <div className="relative z-10 text-left md:ml-16 max-w-lg">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white italic drop-shadow-lg">
          Empowering <br />
          Renewable <br />
          Energy
        </h1>
        <p className="mt-4 md:mt-8 text-sm md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
        &quot;Powering the Future <br />Sustainably with Biomass <br /> Solutions&quot;
        </p>
      </div>

      {/* Energy Saved Badge with Leaf Icon */}
      <div className="absolute bottom-4 md:bottom-10 right-5 md:right-8 z-10">
        <div className="bg-white flex items-center gap-2 rounded-full px-4 py-2  md:px-6 md:py-4 lg:py-5 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
          {/* Leaf Icon */}
          <Leaf className="w-4 h-4 lg:w-6 lg:h-6 text-green-600" />
          <span className="text-green-600 text-sm lg:text-3xl font-bold">80% Energy Saved</span>
        </div>
      </div>
    </section>
  );
}
