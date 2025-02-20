"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/home/Header/Header";
import ContactForm1 from "@/components/home/Contacts/Contact";
import Footer from "@/components/home/Footer/Footer";
const mission: React.FC = () => {
  return (
    <div className="bg-white-100">
      <Header />
      <section className="p-10 bg-white-100">
        <div className="space-y-8 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 lg:gap-0 items-center">
          <h1 className="text-4xl font-extrabold  text-green-800 text-start lg:text-left">
            Our Mission
          </h1>
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
            At Biofield Power, our mission is to transform rural livelihoods and drive the adoption of sustainable, tech-driven solutions in agriculture. We are committed to improving farmer&apos;s income, enhancing productivity, and building resilient communities. By focusing on innovative technologies, we aim to create a robust platform for rural digitalization and support industries in meeting their Sustainable Development Goals (SDGs).
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10 container mx-auto">
          <Image src="/ourMission.png" alt="Our Mission" width={500} height={500} />
        </div>
      </section>
      <section className="p-10 bg-white-100">
        <div className="space-y-8 container mx-auto">
          <h1 className="text-4xl  text-green-800 text-start lg:text-left">
           Key Pillars of Our Mission
          </h1>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-black-800">Enhancing Farmer&apos;s Income:</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
            We empower farmers by providing access to sustainable energy solutions, carbon credits, and biomass-based income opportunities. These initiatives help increase profitability and diversify their revenue streams while reducing operational costs.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-black-800">Promoting Advanced Technologies:</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
            We integrate cutting-edge technologies like Agri-PV systems, loT-enabled monitoring, and biomass conversion processes to maximize land and resource productivity. By adopting these innovations, we enhance crop yields and overall farm efficiency.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-black-800">Digitalizing Rural Economies:</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
            Biofield Power aims to drive rural digital transformation by integrating digital platforms that connect farmers with new markets, financial services, and learning opportunities. Our digital tools also facilitate transparent and efficient waste-to-energy and carbon credit systems.            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-black-800">Supporting SDGs for a Sustainable Future:</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
Our mission aligns with global SDGs by promoting clean energy (SDG 7), sustainable agriculture (SDG 2), climate action (SDG 13), and inclusive economic growth (SDG 8). We provide industries with the tools and partnerships they need to reduce their carbon footprint and achieve sustainability targets. </p>         </div>
 
      <p >
        <br></br>
      Through these initiatives, Biofield Power is creating a future where sustainable agriculture and rural digitalization go hand in hand. Together, we are building resilient rural ecosystems that empower farmers, enable industry progress, and contribute to a more sustainable world.
      </p>

        </div>
      </section>

      
      <ContactForm1 />
      <Footer />
    </div>
  );
};
export default mission;
