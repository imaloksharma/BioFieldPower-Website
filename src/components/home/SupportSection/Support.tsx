import React from "react";
import Image from "next/image";

export default function Support() {
  return (
    <section className="bg-white w-full">
      <div className="flex flex-col sm:flex-row w-full overflow-x-auto sm:overflow-visible">
        {/* First Card - Technology Business Incubator Foundation */}
        <div className="flex-1 bg-green-800 text-white p-6 flex flex-col h-[300px] sm:h-[350px] min-w-[300px] sm:min-w-0">
          <h2 className="text-2xl  sm:text-3xl font-jakarta mb-2 mr-20 text-left">Supported by</h2>
          <div className="mb-4 flex justify-center mt-5">
            <Image
              src="/icons/icon1-removebg-preview.png"
              alt="Icon 1"
              width={200}
              height={200}
            />
          </div>
          <div className="mt-2 text-left">
            <h3 className="text-xl sm:text-l font-semibold leading-tight">
              Technology Business<br />Incubator Foundation
            </h3>
          </div>
        </div>

        {/* Second Card - Indian Institute of Technology Ropar */}
        <div className="flex-1 bg-green-700 text-white p-6 flex flex-col h-[300px] sm:h-[350px] min-w-[300px] sm:min-w-0">
          <div className="mb-4 flex justify-center mt-14">
            <Image
              src="/icons/icon2-removebg-preview.png"
              alt="Icon 2"
              width={200}
              height={200}
            />
          </div>
          <div className="mt-2 text-left">
            <h3 className="text-xl sm:text-l font-semibold leading-tight">
              Indian Institute of Technology<br />Ropar
            </h3>
          </div>
        </div>

        {/* Third Card - Startup India Scheme */}
        <div className="flex-1 bg-green-400 text-white p-6 flex flex-col h-[300px] sm:h-[350px] min-w-[300px] sm:min-w-0">
          <div className="mb-4 flex justify-center mt-12">
            <Image
              src="/icons/icon3-removebg-preview.png"
              alt="Icon 3"
              width={300}
              height={300}
            />
          </div>
          <div className="mt-6 text-left">
            <h3 className="text-xl sm:text-l font-semibold leading-tight">
              Startup India<br />Scheme
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
