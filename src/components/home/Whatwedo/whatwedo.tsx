export default function WhatWeDo() {
  return (
    <section className="bg-green-900 py-12">
      <div className="container mx-auto px-4 text-white">
        
        {/* Heading and Description */}
        <div className="flex flex-col lg:flex-row items-left lg:justify-between mb-12">
          {/* Heading Container */}
          <div className="lg:w-1/2 text-left lg:ml-24"> {/* Shifted more to the right on PC */}
            <h1 className="text-4xl font-bold mb-4">What We Do?</h1>
          </div>
          {/* Description Container */}
          <div className="lg:w-1/2 text-left">
            <p className="text-lg leading-relaxed">
              At Biofield Power Pvt. Ltd., we focus on solving two interconnected challenges aimed at improving farmers&apos;
              livelihoods and promoting sustainable practices:
            </p>
          </div>
        </div>

        {/* Images + Progress Bar Container */}
        <div className="w-full max-w-5xl mx-auto relative">
          
          {/* Images Row (Reduced Gap in Mobile View) */}
          <div className="flex flex-row justify-between items-center gap-0.2 md:gap-8">
            <img 
              src="/1.jpg" 
              alt="Biofuel Supply Chain" 
              className="rounded-2xl shadow-xl w-1/4 md:w-1/3 h-40 md:h-auto transform -translate-x-1 md:-translate-x-8" 
            />
            <img 
              src="/2.jpg" 
              alt="Agri-PV Systems" 
              className="rounded-2xl shadow-xl w-1/4 md:w-1/3 h-40 md:h-auto" 
            />
            <img 
              src="/3.jpg" 
              alt="Carbon Credit" 
              className="rounded-2xl shadow-xl w-1/4 md:w-1/3 h-40 md:h-auto transform translate-x-1 md:translate-x-4" 
            />
          </div>

          {/* Progress Indicator */}
          <div className="relative flex items-center justify-between w-full mt-6">
            <div className="h-2 bg-green-700 w-full rounded-full absolute left-0 top-1/2 transform -translate-y-1/2"></div>
            <div className="relative flex justify-between w-full">
              <div className="w-4 h-4 bg-green-400 rounded-full shadow-lg"></div>
              <div className="w-4 h-4 bg-green-400 rounded-full shadow-lg"></div>
              <div className="w-4 h-4 bg-green-400 rounded-full shadow-lg"></div>
            </div>
          </div>

          {/* Titles */}
          <div className="flex flex-row justify-between w-full mt-4 text-lg font-semibold text-center">
            <span className="w-1/3 text-left">Biofuel Supply Chain</span>
            <span className="w-1/3 text-center">Agri-PV Systems</span>
            <span className="w-1/3 text-right">Carbon Credit</span>
          </div>

        </div>
      </div>
    </section>
  );
}
