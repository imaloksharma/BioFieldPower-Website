/* eslint-disable @next/next/no-img-element */
import React from "react";

const Biomass: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto mt-8 p-6 bg-white rounded-[30px] shadow-lg border border-black border-opacity-10 transition-all duration-300">
      <div className="flex flex-col lg:flex-row bg-transparent shadow-none overflow-hidden border-0">
        <div className="relative w-full lg:w-1/2">
          <img
            src="img/biomass.png"
            alt="Solar panels on farmland with crops"
            className="w-3/2 h-96 object-cover rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px] rounded-tr-[30px]"
          />
        </div>
        <div className="flex flex-col justify-start p-7 lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-800 mb-7">Biomass to Wealth</h1>
          <p className="text-gray-600 mb-6 text-lg sm:text-xl lg:text-2xl">
            Our digital solution optimizes the supply chain of biomass in rural India, connecting farmers, industries, and logistic partners on a shared platform.
          </p>
          <button className="self-start px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Biomass;
