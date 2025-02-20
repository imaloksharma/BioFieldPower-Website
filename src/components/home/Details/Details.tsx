export default function AboutUs() {

  // const WhatWeDo = () => {
  //   return (
  //     <section className="py-10 lg:px-6">
  //       <div className="max-w-4xl  ">
  //         <h2
  //           className="text-3xl font-bold text-green-700 mb-4"
  //         >
  //           What We Do?
  //         </h2>
  //         <p
  //           className="text-lg text-gray-700 transition-opacity duration-500 hover:opacity-80"
  //         >
  //           At Biofield Power Pvt. Ltd., we focus on solving two interconnected challenges aimed at improving farmers&#39; livelihoods and promoting sustainable practices.
  //         </p>
  //       </div>
  //     </section>
  //   );
  // };
    return (
      <section className="p-10 bg-white-100">
      
      <div className="space-y-8 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-0 items-center">
      <a href="/about" className="block">
        <h1 className="text-4xl font-bold text-green-800 text-start lg:text-left cursor-pointer hover:underline">
          About Us
        </h1>
      </a>
      <div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Biofield Power Pvt. Ltd. is a pioneering startup incubated at IIT Ropar and part of the prestigious
          Agriculture and Water Technology Development Hub established in 2021 by the Department of Science &
          Technology, Government of India.With a mission to empower farmers and transform rural economies, we develop innovative technologies that
          bridge the gap between traditional agriculture and modern advancements.
        </p>
      </div>
    </div>

    <div className="space-y-8 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-8 lg:gap-0 items-center">
      <a href="/mission" className="block">
        <h1 className="text-4xl font-bold text-green-800 text-start lg:text-left cursor-pointer hover:underline">
          Our Mission
        </h1>
      </a>
    <p className="text-lg text-gray-700 leading-relaxed">
      At Biofield Power, our mission is to improve farmers&apos; income while enabling the seamless adoption of
      advanced technologies in farmlands. By focusing on sustainable practices and cutting-edge solutions, we
      aim to digitalize rural economies and provide a robust platform for industries to achieve their Sustainable
      Development Goals (SDGs).
    </p>
  </div>

          <div className="space-y-8 container mx-auto mt-14">
            <h1 className="text-4xl font-bold text-green-800">What We Do?</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Biofield Power Pvt. Ltd., we focus on solving two interconnected challenges aimed at improving farmers&apos; 
              livelihoods and promoting sustainable practices.
            </p>
          </div>
          <div/>
      </section>
    );
  }
  



