export default function WhatWeDo() {
  return (
    <section className="bg-green-900 py-12"> {/* Dark green background */}
      <div className="container mx-auto px-4 text-white">
        {/* Heading and Description */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-4xl font-bold mb-4">What We Do?</h1>
          <p className="text-lg leading-relaxed">
            At Biofield Power Pvt. Ltd., we focus on solving two interconnected challenges aimed at improving farmers' 
            livelihoods and promoting sustainable practices:
          </p>
        </div>

        {/* Images and Progress Indicator */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-6">
            <div className="w-64 md:w-1/3 flex justify-center">
              <img src="/1.jpg" alt="Biofuel Supply Chain" className="rounded-2xl shadow-xl w-full" />
            </div>
            <div className="w-64 md:w-1/3 flex justify-center">
              <img src="/2.jpg" alt="Agri-PV Systems" className="rounded-2xl shadow-xl w-full" />
            </div>
            <div className="w-64 md:w-1/3 flex justify-center">
              <img src="/3.jpg" alt="Carbon Credit" className="rounded-2xl shadow-xl w-full" />
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="relative flex items-center justify-center w-3/4">
            <div className="h-2 bg-green-700 w-full rounded-full relative">
              <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-green-400 rounded-full shadow-lg"></div>
              <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-green-400 rounded-full shadow-lg"></div>
              <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-green-400 rounded-full shadow-lg"></div>
            </div>
          </div>

          {/* Titles */}
          <div className="flex justify-around w-3/4 mt-4 text-lg font-semibold">
            <span>Biofuel Supply Chain</span>
            <span>Agri-PV Systems</span>
            <span>Carbon Credit</span>
          </div>
        </div>
      </div>
    </section>
  );
}