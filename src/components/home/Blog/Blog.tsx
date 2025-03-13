"use client";

import React, { useEffect, useState, useRef } from "react"; // Note useRef import
import Image from "next/image";

const testimonialsData = [
  { name: "Dr. Amandeep Singh", role: "Agriculture Officer", message: "Biofield Power is revolutionizing agriculture with their innovative solutions.", image: "/Img/Kisan.jpg" },
  { name: "Rajan Kaur", role: "Farmer", message: "Their biomass supply chain app is a game-changer for us.", image: "/Img/Kisan.jpg" },
  { name: "John Doe", role: "Industry Partner", message: "Excited to see the impact of their Agri-PV system.", image: "/Img/Kisan.jpg" },
  { name: "Jane Smith", role: "Angel Investor", message: "Supporting sustainable development goals with innovative tech.", image: "/Img/Kisan.jpg" },
  { name: "Michael Brown", role: "Industry Partner", message: "A great example of uplifting the rural economy.", image: "/Img/Kisan.jpg" },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const cardRef = useRef(null); // create a ref to store the card reference
  const cardRef = useRef<HTMLDivElement>(null); // create a ref to store the card reference
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getCardWidth = () => {
    if (cardRef.current) {
      return cardRef.current.offsetWidth;
    }
    return 0;
  };

  return (
    <section className="py-12 bg-green-100">
      <h2 className="text-3xl font-bold text-green-800 text-center mb-8">What People Are Saying</h2>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 "
          style={{
            transform: `translateX(-${activeIndex * getCardWidth()}px)`,
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              ref={index === 0 ? cardRef : null} 
              className="flex-shrink-0 w-full lg:mx-16 sm:w-4/5 sm:max-w-sm lg:w-1/3 max-w-full mx-auto bg-green-700 rounded-lg p-6 text-white flex flex-col items-start shadow-lg"
            >
              <div className="flex items-center  mb-4">
                <Image width={80} height={80} src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white" />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sm opacity-75">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
