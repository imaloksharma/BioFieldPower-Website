import React from 'react';



export default function HeroSection() {
  return (
    <section className="relative h-68 lg:h-screen p-8 mt-8 lg:m-4 bg-cover my-4 bg-center" style={{ backgroundImage: 'url("Img/Solar.png")' }}>
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center -translate-y-5">

        <h1 className="text-2xl lg:text-7xl font-bold text-green-900 font-style: italic">
          Empowering 
          Renewable 
          Energy
        </h1>
        <p className="mt-4 text-xl lg:text-xl text-bold text-black-700">
        &quot;Powering the Future Sustainably with Biomass Solutions&quot;   
        </p>
        <div className="mt-8 bg-white rounded-full p-4 shadow-lg">
          <p className="text-green-600 text-xl font-bold">80% Energy Saved</p>

        </div>
      </div>
    </section>
  );
}
