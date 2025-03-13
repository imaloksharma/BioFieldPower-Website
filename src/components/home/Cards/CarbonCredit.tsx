/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const CarbonCredit: React.FC = () => {
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
            src="/CreditCarbon.png"
            alt="Carbon Credit"
            className="w-full h-[300px] sm:h-[300px] md:h-[350px] lg:h-[500px] object-cover rounded-[20px]"
            />
        </motion.div>
        <div className="flex flex-col  text-start p-4 ">
        <h1 className="text-2xl sm:text-3xl font-black items-left text-green-900 mb-4">
            Carbon Credit
        </h1>
            <p className="text-black text-lg">
            A Carbon Credit is a tradable certificate or permit that represents the right to emit one metric ton of carbon dioxide CO<sub>2</sub> or an equivalent amount of other{" "}
            {isExpanded && (
              <>
                greenhouse gases (GHGs). Carbon credits are part of efforts to mitigate global climate change by incentivizing companies, organizations, or individuals to reduce their emissions.
              </>
            )}
             <button
             onClick={() => setIsExpanded(!isExpanded)}
             className="text-green-600 mb-6 text-xl lg:text-xl"
             >
             {isExpanded ? "  Read Less" : "...Read More"}
             </button>
          </p>
          <Link href="/carbon-credits">
            <button className="self-start px-6 py-3 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-700 transition">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarbonCredit;
