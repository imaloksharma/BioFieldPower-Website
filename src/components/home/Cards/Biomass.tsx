/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
const Biomass: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-green-100">
    <div className="max-w-5xl mx-auto  p-6 bg-green-100  transition-all duration-300">
      <motion.div
        whileHover={{ scale: 0.95 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-full"
      >
        <img
          src="/Biomass1.png"
          alt="Digital Biofuel Supply Chain"
          className="w-full h-[500px] object-cover rounded-[20px]"
        />
      </motion.div>
      <div className="flex flex-col  text-start p-6 border-4 rounded-lg border-green-800 bg-white mt-4">
        <h1 className="text-2xl sm:text-3xl font-black items-left text-green-900 mb-4">
          Digitalizing Biofuel Supply Chain
        </h1>
        <p className="text-black text-xl">
        Our innovative digital solution enhances the efficiency of the biomass supply chain
           in rural India, seamlessly connecting farmers, industries, and logistics {" "}
            
            {isExpanded && (
            <>
             partners on a 
            unified platform for optimized collaboration and sustainable growth. 
            </>
            )}
             <button
             onClick={() => setIsExpanded(!isExpanded)}
             className="text-green-600 mb-6 text-xl lg:text-xl"
             >
             {isExpanded ? "  Read Less" : "...Read More"}
             </button>
        </p>
          <Link href="https://pindgrid.com/language">
          <button className="self-start px-6 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-700 transition">
              Read More
            </button>
          </Link>
      </div>
    </div>
    </div>

  );
};

export default Biomass;
