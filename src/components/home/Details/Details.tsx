import React from "react";
import Image from "next/image";

const Details = () => {
  return (
    <section className="w-full bg-white text-black px-4 md:px-16 pt-6 pb-0 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-semibold text-green-700 text-center mb-28">
        About Us
      </h2>

      {/* Mobile: Show image, hide content */}
      <div className="block md:hidden mb-8">
        <Image
          src="/aboutus_mobile.png"
          alt="About Us Mobile"
          width={400}
          height={300}
          className="mx-auto"
        />
      </div>

      {/* Desktop/Tablet: Show original content */}
      <div className="hidden md:flex flex-col items-center gap-12 relative min-h-0 h-[950px]">
        {/* Truck */}
        <div className="relative left-[-440px]">
          <Image src="/truck.svg" alt="Truck" width={260} height={160} />
        </div>
        {/* Arrow to farm */}
        <div className="relative left-[-10px] top-[-210px]">
          <Image src="/up_arrow.svg" alt="Arrow" width={254} height={364} />
        </div>
        {/* Farm */}
        <div className="relative left-[350px] top-[-240px]">
          <Image src="/farm.svg" alt="Farm" width={540} height={540} />
        </div>
        {/* Description */}
        <div className="relative left-[-310px] bottom-[440px] w-full max-w-3xl text-justify text-gray-700 px-4">
          <p className="text-sm md:text-base">
            <strong>Biofield Power Pvt. Ltd.</strong> is a pioneering startup
            incubated at IIT Ropar and part of the prestigious Agriculture and
            Water Technology Development Hub established in 2021 by the
            Department of Science & Technology, Government of India. With a
            mission to empower farmers and transform rural economies, we develop
            innovative technologies that bridge the gap between traditional
            agriculture and modern advancements.
          </p>
        </div>
        {/* Arrow to biogas */}
        <div className="relative left-[260px] bottom-[380px]">
          <Image src="/low_arrow.svg" alt="Arrow" width={134} height={64} />
        </div>
        {/* Biogas */}
        <div className="relative left-[-180px] bottom-[500px]">
          <Image src="/biogas.svg" alt="Biogas" width={500} height={400} />
        </div>
      </div>
    </section>
  );
};

export default Details;
