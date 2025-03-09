/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";

const Biomass: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-7xl mx-auto mt-8 p-6 bg-white rounded-[20px] transition-all duration-300">
      <div className="flex flex-col lg:flex-row bg-transparent shadow-none overflow-hidden border-0">
        <motion.div
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-full lg:w-1/2"
        >
          <img
            src="/biomass.png"
            alt="Solar panels on farmland with crops"
            className="mt-2 ml-4 w-3/4 lg:w-1/2 h-120 object-cover rounded-[30px]"
          />
        </motion.div>
        <div className="flex flex-col justify-start p-7 lg:w-2/3">
          <h1 className="text-4xl sm:text-4xl font-black text-gray-900 mb-5">Digitalizing Biomass Supply Chain</h1>
          <p className="text-gray-600 mb-6 text-lg sm:text-xl lg:text-xl">
            Our innovative digital solution enhances the efficiency of the biomass supply chain in rural India, seamlessly connecting farmers, industries, and logistics{" "}
            {isExpanded && (
              <>
                partners on a unified platform for optimized collaboration and sustainable growth.
              </>
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-green-600 mb-6 text-lg sm:text-xl lg:text-xl"
            >
              {isExpanded ? "Read Less" : "...Read More"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Biomass;