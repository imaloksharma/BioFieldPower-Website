'use client'
import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative h-68 md:h-[30rem] lg:h-[40rem] p-8 bg-cover bg-center lg:bg-[url('/Img/Solar.png')] bg-[url('/Img/Solar1.png')] transition-all duration-1000 ease-in-out">
      <h1 className="text-2xl lg:ml-16 lg:text-8xl font-bold text-green-900 italic transition-transform duration-700 ease-in-out hover:translate-y-2">
        Empowering <br/>
        Renewable <br/>
        Energy
      </h1>
      <p className="mt-4 text-sm lg:text-3xl text-bold text-black-700 transition-opacity duration-700 ease-in-out hover:opacity-80">
        &quot;Powering the Future <br/>Sustainably with Biomass <br/> Solutions&quot;   
      </p>
      <div className="relative z-10 flex flex-row items-center justify-end text-center -translate-y-5">
        <div className="bg-white rounded-full mt-12 p-2 lg:p-8 h-8 lg:h-24 shadow-lg transition-transform duration-700 ease-in-out hover:scale-110">
          <p className="text-green-600 text-sm lg:text-xl font-bold">80% Energy Saved</p>
        </div>
      </div>
    </section>
  );
}