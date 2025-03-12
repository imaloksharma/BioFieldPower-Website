import React from "react";

export default function Support() {
  return (
    <section className="bg-white w-full">
      <div className="flex flex-col sm:flex-row w-full">
        {/* First Card - Technology Business Incubator Foundation */}
        <div className="flex-1 bg-green-800 text-white p-10 flex flex-col h-[550px]">
          <h2 className="text-4xl font-jakarta mb-8 text-left">Supported by</h2>
          <div className="mb-8 flex justify-center mt-12">
            <img
              src="/icons/icon1-removebg-preview.png"
              alt="Icon 1"
              className="h-44 w-50"
            />
          </div>
          <div className="mt-12 text-left">
            <h3 className="text-3xl font-semibold">
              Technology Business<br />Incubator Foundation
            </h3>
          </div>
        </div>

        {/* Second Card - Indian Institute of Technology Ropar */}
        <div className="flex-1 bg-green-700 text-white p-10 flex flex-col h-[550px]">
          <div className="mb-8 flex justify-center mt-32 mr-">
            <img
              src="/icons/icon2-removebg-preview.png"
              alt="Icon 2"
              className="h-44 w-50"
            />
          </div>
          <div className="mt-10 text-left"> {/* Added margin-top here */}
            <h3 className="text-3xl font-semibold">
              Indian Institute of Technology<br />Ropar
            </h3>
          </div>
        </div>

        {/* Third Card - Startup India Scheme */}
        <div className="flex-1 bg-green-400 text-white p-10 flex flex-col h-[550px]">
          <div className="mb-8 flex justify-center mt-28">
            <img
              src="/icons/icon3-removebg-preview.png"
              alt="Icon 3"
              className="h-30 w-100"
            />
          </div>
          <div className="mt-11 text-left">
            <h3 className="text-3xl font-semibold">
              Startup India<br />Scheme
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
