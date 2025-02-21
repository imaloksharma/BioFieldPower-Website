'use client'
import React from 'react';
import { Leaf } from "lucide-react";
export default function HeroSection() {
  return (
    <section 
      className="relative h-68 md:h-[30rem] lg:h-[40rem] p-8 bg-cover bg-center w-full"
      style={{ backgroundImage: "url('/Img/newsolar.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30"></div> 
      
      <div className="relative z-10 text-center lg:text-left lg:ml-16">
        <h1 className="text-4xl text-white lg:text-8xl font-bold lg:text-slate-200 italic mix-blend-overlay drop-shadow-lg transition-transform duration-700 ease-in-out hover:translate-y-2">
          Empowering <br/>
          Renewable <br/>
          Energy
        </h1>
        <p className="mt-4 text-sm lg:text-3xl lg:mt-6 font-bold text-white mix-blend-overlay drop-shadow-lg transition-opacity duration-700 ease-in-out hover:opacity-80">
          &quot;Powering the Future <br/>Sustainably with Biomass <br/> Solutions&quot;   
        </p>
      </div>

      <div className="relative z-10 mt-4 lg:mt-16 flex flex-row items-center justify-end text-center -translate-y-5">
        <div className="bg-white flex items-center gap-2 rounded-full mt-16 p-2 lg:p-4 h-8 lg:h-16 shadow-lg transition-transform duration-700 ease-in-out hover:scale-110">
          <Leaf className="w-4 h-4 lg:w-6 lg:h-6 text-green-600" />
          <p className="text-green-600 text-sm lg:text-xl font-bold">80% Energy Saved</p>
        </div>
      </div>
    </section>
  );
}
