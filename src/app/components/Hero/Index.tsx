import React from 'react';



export default function HeroSection() {
  return (
    <section className="relative h-screen bg-cover m-4 bg-center" style={{ backgroundImage: 'url("img/Solar.png")' }}>
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl font-bold text-black-900">
          Empowering Renewable Energy
        </h1>
        <p className="mt-4 text-xl text-green-700">
        &quot;Powering the Future Sustainably with Biomass Solutions&quot;   
        </p>
        <div className="mt-8 bg-white rounded-full p-4 shadow-lg">
          <p className="text-green-600 text-xl font-medium">80% Energy Saved</p>

        </div>
      </div>
    </section>
  );
}
