"use client";
import React from "react";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Header from "@/components/home/Header/Header";
import Footer from "@/components/home/Footer/Footer";
import Testimonials from "@/components/home/Blog/Blog";
import ContactForm1 from "@/components/home/Contacts/Contact";

const CarbonCredit = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <div className="container mx-auto px-6 sm:px-8 lg:px-8 space-y-6 mt-6 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-800 text-start sm:text-left">
          Carbon Credits
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-justify">
          India is a significant player in the global carbon credit market, contributing approximately 
          20% of the world&apos;s carbon credits. As of June 2023, the country had 860 registered projects and 
          1,451 projects under various stages of consideration with leading carbon crediting programs like Verra and Gold Standard.
        </p>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          Carbon credits are tradable permits that represent the right to emit one metric ton of carbon dioxide CO<sub>2</sub> or equivalent greenhouse gases (GHGs). They are used as part of cap-and-trade programs and voluntary carbon markets 
          to reduce global emissions and combat climate change.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-[40vh] bg-green-50 px-6 py-8">
     <div className="flex flex-col md:flex-row items-center max-w-4xl w-full">
    <div className="w-full md:w-2/5 flex justify-center mb-6 ml-2 mr-4 md:mb-0">
      <Image src="/Earth.png" alt="Earth" width={380} height={380} />
    </div>
    <div className="w-full md:w-3/5 text-green-900 text-center md:text-left ml-8">
      <h1 className="text-3xl md:text-3xl ml-6">Global Insights</h1>
      <p className="mt-6 text-md  text-gray-600 max-w-md mx-auto text-left">
      Here is a percentage growth graph comparing Corporate Investments and
      Market Dynamics in carbon credits from 2020 to 2024.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start mt-9 gap-6">
        <ProgressCircle label="Corporate Investments" value={72} />
        <ProgressCircle label="Market Dynamics" value={80} />
            </div>
          </div>
        </div>
      </div> 
      <div className="container mx-auto  px-6 py-8">
      {/* <div className="max-w-5xl mx-auto px-6 py-8"> */}
        <h1 className="text-2xl font-semibold text-green-800">Corporate Investments</h1>
        <p className="text-lg mt-1">
          Companies like TotalEnergies are investing heavily in carbon credits to offset emissions. 
          TotalEnergies, for instance, has committed $725 million globally to offsets, including a 
          $100 million investment to preserve U.S. forests, aiming to meet net-zero emissions goals by 2050.
        </p>

        <h1 className="text-2xl font-bold text-green-800 mt-6">Market Dynamics</h1>
        <p className="text-lg mt-1">
          The voluntary carbon markets are rapidly growing, with an increasing number of new market entrants needing data 
          to make informed decisions. Platforms like Sylvera&apos;s Carbon Credit Analytics help participants analyze and compare 
          the quality of retirements across various registries and standards.
        </p>

        <h1 className="text-2xl font-bold text-green-900 mt-12">India&apos;s Carbon Credit Landscape</h1>
        <p className="text-lg mt-1">
          India is actively participating in carbon credit trading schemes, leveraging both compliance and voluntary markets 
          to contribute to global emissions reduction efforts.
        </p>

        <h1 className="text-2xl font-bold text-green-800 mt-6">Carbon Credit Trading Scheme (CCTS)</h1>
        <p className="text-lg mt-1 mb-4">
          The revised CCTS allows non-obligated entities, including companies and individuals, to participate in the tradable 
          carbon credits market. This inclusion aims to efficiently price emissions and expand the voluntary carbon market.
        </p>
        <h1 className="text-2xl font-bold text-green-800 mt-6">Voluntary Market Expansion</h1>
        <p className="text-lg mt-1 mb-4">
        The revised CCTS allows non-obligated entities, including companies and individuals, to participate in the tradable carbon credits market. This inclusion aims to efficiently price emissions and expand the voluntary carbon market.
        </p>
      </div>
      <Testimonials />
      <ContactForm1 />
      <Footer />
    </div>
  );
};
interface ProgressCircleProps {
  label: string;
  value: number;
}
const ProgressCircle: React.FC<ProgressCircleProps> =({ label, value }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-32 h-32">
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          styles={buildStyles({
            pathColor: "#2F855A",
            textColor: "#2F855A",
            trailColor: "#E2E8F0",
            textSize: "20px",
          })}
        />
      </div>
      <p className="mt-2 text-xl font-medium text-gray-700">{label}</p>
    </div>
  );
};
export default CarbonCredit;
