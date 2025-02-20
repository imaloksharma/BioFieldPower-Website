"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/home/Header/Header";
import ContactForm1 from "@/components/home/Contacts/Contact";
import Footer from "@/components/home/Footer/Footer";
const FocusAreas: React.FC = () => {
  return (
    <div className="bg-white-100">
      <Header />
      <section className="p-10 bg-white-100">
        <div className="space-y-8 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 lg:gap-0 items-center">
          <h1 className="text-4xl font-bold text-green-800 text-start lg:text-left">
            About Us
          </h1>
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Biofield Power, we are transforming the renewable energy landscape by offering cutting-edge 
              solutions that empower communities, enhance sustainability, and drive meaningful environmental impact. 
              Our mission is to harness the power of nature to create a cleaner, greener, and more prosperous future.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10 container mx-auto">
          <Image src="/about.png" alt="About us" width={400} height={400} />
        </div>
      </section>
      <section className="p-10 bg-white-100">
        <div className="space-y-8 container mx-auto">
          <h1 className="text-4xl font-bold text-green-800 text-start lg:text-left">
            Our Focus Areas
          </h1>
          <div className="space-y-4">
            <h2 className="text-2xl  text-green-900">Carbon Credit Agri-PV Systems:</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Biofield Power, we combine renewable energy generation with agricultural productivity 
              through our innovative Agri-PV systems. These dual-use solar installations maximize land 
              efficiency by allowing crops to grow under solar panels while generating clean energy. 
              Through carbon credit integration, we help farmers and landowners tap into global carbon 
              markets, creating new streams of income while reducing carbon footprints.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl  text-green-900">Biomass to Wealth:</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our Biomass to Wealth initiative transforms agricultural residues, organic waste, and other 
              biomass into renewable energy and value-added products. By converting waste into clean energy 
              sources like biogas and biochar, we reduce emissions and promote circular economy principles. 
              This initiative also supports rural development by creating jobs and fostering sustainable 
              entrepreneurship in agricultural communities.
            </p>
          </div>
        </div>
      </section>

      <section className="p-10 bg-white">
        <div className="space-y-8 container mx-auto">
          <h1 className="text-4xl font-semibold text-green-800 text-start lg:text-left">
            Our Impact
          </h1>
          <ul className="space-y-4">
            <li className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-black-900">• Environmental Sustainability:</span> We are committed to reducing greenhouse gas 
              emissions and promoting renewable energy adoption at every level.
            </li>
            <li className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-black-900">• Economic Empowerment:</span> By turning waste into wealth and promoting carbon credit 
              opportunities, we enable rural communities to thrive economically.
            </li>
            <li className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-black-900">• Energy Access:</span> Our solutions provide accessible and reliable renewable energy to 
              communities and businesses, contributing to energy security and self-sufficiency.
            </li>
          </ul>
        </div>
      </section>
      <ContactForm1 />
      <Footer />
    </div>
  );
};
export default FocusAreas;
