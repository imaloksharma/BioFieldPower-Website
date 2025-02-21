'use client'
import React from 'react';

export default function HeroSection() {
  return (
    <section 
      className="relative h-68 md:h-[30rem] lg:h-[40rem] p-8 bg-cover bg-center w-full"
      style={{ backgroundImage: "url('/Img/newsolar.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30"></div> 
      
      <div className="relative z-10 text-center md:text-left md:ml-16">
        <h1 className="text-2xl md:text-6xl lg:text-7xl   font-bold text-white italic mix-blend-overlay drop-shadow-lg transition-transform duration-700 ease-in-out hover:translate-y-2">
          Empowering <br/>
          Renewable <br/>
          Energy
        </h1>
        <p className="mt-6 md:mt-16 text-sm lg:text-3xl md:text-2xl font-bold text-white mix-blend-overlay drop-shadow-lg transition-opacity duration-700 ease-in-out hover:opacity-80">
          &quot;Powering the Future <br/>Sustainably with Biomass <br/> Solutions&quot;   
        </p>
      </div>

      <div className="relative z-10 flex justify-end -translate-y-5">
        <div className="bg-white rounded-full mt-12 p-2 lg:p-8 h-8 lg:h-24 shadow-lg transition-transform duration-700 ease-in-out hover:scale-110">
          <p className="text-green-600 text-sm lg:text-xl font-bold">80% Energy Saved</p>
        </div>
      </div>
    </section>
  );
}
