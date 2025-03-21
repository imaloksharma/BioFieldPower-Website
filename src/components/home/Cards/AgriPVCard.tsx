/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";

const AgriCard: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="bg-white">
    <div className="max-w-5xl mx-auto p-6 transition-all duration-300">
        <motion.div
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.95 }} 
        className="relative w-full" 
        > 
          <img 
          src="/solarPanel.png"
          alt="Solar panels on farmland with crops"
          className="w-full h-[300px] sm:h-[300px] md:h-[350px] lg:h-[500px] object-cover rounded-[20px]"
      />

        </motion.div>
        <div className="flex flex-col  text-start p-4">
        <h1 className="text-2xl sm:text-3xl font-black items-left text-green-900 mb-4">
            Agri-PV Systems</h1>
            <p className="text-black text-lg">
            Agri-PV Systems utilise farmland boundaries to install solar panels, generating renewable energy without compromising cultivation space. This innovation{" "}
            {isExpanded && (
              <>
                model creates an additional income stream for farmers through revenue-sharing while supporting sustainable energy adoption in rural areas.
              </>
            )}
             <button
             onClick={() => setIsExpanded(!isExpanded)}
             className="text-green-600 mb-6 text-xl lg:text-xl"
             >
             {isExpanded ? "  Read Less" : "...Read More"}
             </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgriCard;
