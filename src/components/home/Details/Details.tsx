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
      
      <div className="container mx-auto mt-8 space-y-8 flex flex-col sm:grid sm:grid-cols-12 sm:items-center">
  <a href="/about" className="block sm:col-span-3 md:col-span-4 lg:col-span-3">
    <h1 className="text-4xl font-bold text-green-800 text-start sm:text-left cursor-pointer hover:text-green-700">
      About Us
    </h1>
  </a>
  <div className="sm:col-span-9 md:col-span-8 lg:col-span-9">
    <p className="text-lg text-gray-700 leading-relaxed">
      Biofield Power Pvt. Ltd. is a pioneering startup incubated at IIT Ropar and part of the prestigious
      Agriculture and Water Technology Development Hub established in 2021 by the Department of Science & 
      Technology, Government of India. With a mission to empower farmers and transform rural economies, we develop 
      innovative technologies that bridge the gap between traditional agriculture and modern advancements.
    </p>
  </div>
</div>

<div className="container mx-auto mt-8 space-y-8 flex flex-col sm:grid sm:grid-cols-12 sm:items-center">
  <a href="/mission" className="block sm:col-span-3">
    <h1 className="text-4xl font-bold text-green-800 text-start sm:text-left cursor-pointer hover:text-green-700">
      Our Mission
    </h1>
  </a>
  <p className="text-lg text-gray-700 leading-relaxed sm:col-span-9">
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
  



