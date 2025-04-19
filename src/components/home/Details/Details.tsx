import React from "react";
import Image from "next/image";

const Details = () => {
  return (
    <section className="w-full bg-white text-black px-4 md:px-16 pt-6 pb-0 overflow-hidden font-[Raleway]">
      <h2 className="text-3xl md:text-4xl font-semibold text-green-700 text-center mb-12 md:mb-28">
        About Us
      </h2>

      {/* Mobile: Show image, hide content */}
      <div className="block md:hidden mb-8 mt-[-30px]">
        <Image
          src="/aboutus_mobile.png"
          alt="About Us Mobile"
          width={400}
          height={300}
          className="mx-auto"
        />
      </div>

      {/* Desktop/Tablet: Show original content */}
      <div className="hidden md:flex flex-col items-center gap-12 relative min-h-0 h-[1000px]">
        {/* Truck */}
        <div className="relative left-[-440px]">
          <Image src="/truck.svg" alt="Truck" width={360} height={360} />
        </div>

        {/* Arrow to farm */}
        <div className="relative left-[-10px] top-[-210px]">
          <Image src="/up_arrow.svg" alt="Arrow" width={254} height={364} />
        </div>

        {/* Farm */}
        <div className="relative left-[350px] top-[-240px]">
          <Image src="/farm.svg" alt="Farm" width={640} height={540} />
        </div>

        {/* Description */}
        <div className="relative left-[-210px] bottom-[540px] w-full max-w-4xl text-gray-900 px-4">
          <p
            className="text-justify"
            style={{
              fontFamily: "Raleway",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "32px",
              letterSpacing: "-0.5%",
              textAlign: "justify",
            }}
          >
            <strong>Biofield Power Pvt. Ltd.</strong> is a pioneering startup<br /> incubated at IIT Ropar and part of the prestigious <br />Agriculture and Water Technology Development<br /> Hub established in 2021 by the Department of <br /> Science & Technology, Government of India. With <br /> a mission to empower farmers and transform rural<br />  economies, we develop innovative technologies<br />  that bridge the gap between traditional <br /> agriculture and modern advancements.
          </p>
        </div>

        {/* Arrow to biogas */}
        <div className="relative left-[260px] bottom-[580px]">
          <Image src="/low_arrow.svg" alt="Arrow" width={134} height={64} />
        </div>

        {/* Biogas */}
        <div className="relative left-[-180px] bottom-[710px]">
          <Image src="/biogas.svg" alt="Biogas" width={500} height={400} />
        </div>
      </div>
    </section>
  );
};

export default Details;
