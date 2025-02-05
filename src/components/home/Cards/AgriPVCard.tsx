/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
const AgriCard: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="max-w-7xl mx-auto mt-8 p-6 bg-white rounded-[20px] border border-black border-opacity-10 transition-all duration-300">
      <div className="flex flex-col lg:flex-row bg-transparent shadow-none overflow-hidden border-0">
        <motion.div
        whileHover={{ scale: 0.9}}
        whileTap={{ scale: 0.95 }}
        className="relative w-full lg:w-1/2">
          <img
            src="/solarPanel.png"
            alt="Solar panels on farmland with crops"
            
            className="w-3/4 h-120 object-cover rounded-[30px]"
          />
        </motion.div>
        <div className="flex flex-col justify-start p-7 lg:w-2/3">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-800 mb-7">Agri-PV Systems</h1>
          <p className="text-gray-600 mb-6 text-lg sm:text-xl lg:text-2xl">
          Agri-PV Systems utilise farmland boundaries to install solar panels, 
          generating renewable energy without compromising cultivation space. This innovation{" "}
          {isExpanded && (
            <>
            model creates an additional income stream for farmers through revenue-sharing 
            while supporting sustainable energy adoption in rural areas.
            </>
            )}
             <button
             onClick={() => setIsExpanded(!isExpanded)}
             className="text-green-600 mb-6 text-lg sm:text-xl lg:text-2xl"
             >
             {isExpanded ? "  Read Less" : "...Read More"}
             </button>
           </p>
          {/* <button className="self-start px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">

            Learn More
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default AgriCard;

