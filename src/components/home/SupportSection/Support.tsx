"use client";

import React, { useEffect, useState, useRef } from "react"; 
import Image from "next/image";

const SupportData = [
  { name: "img1", image: "/icons/icon1-removebg-preview.png" },
  { name: "img2", image: "/icons/icon2-removebg-preview.png" },
  { name: "img3", image: "/icons/icon3-removebg-preview.png" },
  { name: "img4", image: "/icons/icon4-removebg-preview.png" }
];

const Support = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement | null>(null); 

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % SupportData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getCardWidth = () => (cardRef.current ? cardRef.current.offsetWidth : 0);

  return (
    <section className="py-12 bg-white">
      <h2 className=" bg-gray-100 p-2 italic text-3xl font-bold text-green-800 text-center mb-8">Supported by</h2>
      <div className="relative overflow-hidden w-full flex justify-center">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * getCardWidth()}px)` }}
        >
          {SupportData.map((testimonial, index) => (
            <div
              key={index}
              ref={index === 0 ? cardRef : null}
              className="flex-shrink-0 w-70 bg-white rounded-lg p-6  sm:mx-4 text-center flex justify-center items-center"
            >
              <div className="flex flex-col items-center justify-center">
              <Image 
                  width={188} height={188}   
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-40 h-34 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
