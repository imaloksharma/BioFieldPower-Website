

import React from "react";
import Image from "next/image";

export default function Support() {
  return (
    <section className="bg-white w-full">
      <div className="flex flex-row w-full">
        {/* First Card - Technology Business Incubator Foundation */}
        <div className="w-1/3 bg-green-800 text-white pt-6 pr-6 pb-6 pl-6 flex flex-col items-center justify-center h-[220px] sm:h-[300px]">
          <h2 className="text-md md:text-2xl lg:text-3xl font-jakarta text-center mb-2">
            Supported by
          </h2>
          <div className="mb-4 mt-2 flex justify-center">
            <Image
              src="/icons/icon1-removebg-preview.png"
              alt="Icon 1"
              width={150}
              height={150}
            />
          </div>
          <div className="mt-2 text-left">
            <h3 className="text-sm md:text-xl lg:text-2xl font-semibold leading-tight">
              Technology Business<br />Incubator Foundation
            </h3>
          </div>
        </div>

        {/* Second Card - Indian Institute of Technology Ropar */}
        <div className="w-1/3 bg-green-700 text-white p-6 flex flex-col items-center justify-center h-[220px] sm:h-[300px]">
          <div className="mt-8 mb-4 flex justify-center">
            <Image
              src="/icons/icon2-removebg-preview.png"
              alt="Icon 2"
              width={130}
              height={130}
            />
          </div>
          <div className="mt-4 text-left">
            <h3 className="text-sm md:text-xl lg:text-2xl font-semibold leading-tight">
              Indian Institute of Technology<br />Ropar
            </h3>
          </div>
        </div>

        {/* Third Card - Startup India Scheme */}
        <div className="w-1/3 bg-green-500 text-white p-6 flex flex-col items-center justify-center h-[220px] sm:h-[300px]">
          <div className="mb-4 flex justify-center">
            <Image
              src="/icons/icon3-removebg-preview.png"
              alt="Icon 3"
              width={240}
              height={240}
            />
          </div>
          <div className="mt-6 text-left">
            <h3 className="text-sm md:text-xl lg:text-2xl font-semibold leading-tight">
              Startup India<br />Scheme
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

