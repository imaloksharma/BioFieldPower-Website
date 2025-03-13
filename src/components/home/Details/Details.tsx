import React from 'react';

export default function AboutUs() {
  return (
    <section className="p-6 sm:p-10 bg-green-100">
      {/* About Us Section */}
      <div className="container mx-auto  sm:mt-8 space-y-6 sm:space-y-8 max-w-6xl w-full"> 
        <div className=" p-4 sm:p-6  w-full"> 
          <div className="flex flex-col sm:grid sm:grid-cols-12 sm:items-center">
            <a href="/about" className="block sm:col-span-3 md:col-span-4 lg:col-span-3">
              <h1 className="text-3xl sm:text-4xl font-bold text-green-800 text-start sm:text-left cursor-pointer hover:text-green-700 mb-4 sm:mb-6">
                About Us
              </h1>
            </a>
            <div className="sm:col-span-9 md:col-span-8 lg:col-span-9">
              <p className="text-sm sm:text-xl text-gray-700 leading-relaxed">
                Biofield Power Pvt. Ltd. is a pioneering startup incubated at IIT Ropar and part of the prestigious
                Agriculture and Water Technology Development Hub established in 2021 by the Department of Science & 
                Technology, Government of India. With a mission to empower farmers and transform rural economies, we develop 
                innovative technologies that bridge the gap between traditional agriculture and modern advancements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="container mx-auto sm:mt-8 space-y-6 sm:space-y-8 max-w-6xl w-full">
        <div className=" p-4 sm:p-6 w-full">
          <div className="flex flex-col sm:grid sm:grid-cols-12 sm:items-center">
            <a href="/mission" className="block sm:col-span-3">
              <h1 className="text-3xl sm:text-4xl font-bold text-green-800 text-start sm:text-left cursor-pointer hover:text-green-700 mb-4 sm:mb-6">
                Our Mission
              </h1>
            </a>
            <p className="text-sm sm:text-xl text-gray-700 leading-relaxed sm:col-span-9">
              At Biofield Power, our mission is to improve farmers&apos; income while enabling the seamless adoption of
              advanced technologies in farmlands. By focusing on sustainable practices and cutting-edge solutions, we
              aim to digitalize rural economies and provide a robust platform for industries to achieve their Sustainable
              Development Goals (SDGs).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
