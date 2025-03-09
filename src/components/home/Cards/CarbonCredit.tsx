/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const CarbonCredit: React.FC = () => {
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
            src="/CreditCarbon.png"
            alt="Carbon Credit"
            className="mt-2 ml-4 w-3/4 lg:w-1/2 h-120 object-cover rounded-[30px]"
          />
        </motion.div>
        <div className="flex flex-col justify-start p-7 lg:w-2/3">
          <h1 className="text-4xl sm:text-4xl font-black text-gray-900 mb-5">Carbon Credit</h1>
          <p className="text-gray-600 mb-6 text-lg sm:text-xl lg:text-xl">
            A Carbon Credit is a tradable certificate or permit that represents the right to emit one metric ton of carbon dioxide CO<sub>2</sub> or an equivalent amount of other{" "}
            {isExpanded && (
              <>
                greenhouse gases (GHGs). Carbon credits are part of efforts to mitigate global climate change by incentivizing companies, organizations, or individuals to reduce their emissions.
              </>
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-green-600 mb-6 text-lg sm:text-xl lg:text-xl"
            >
              {isExpanded ? "Read Less" : "...Read More"}
            </button>
          </p>
          <Link href="/carbon-credits">
            <button className="self-start px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarbonCredit;