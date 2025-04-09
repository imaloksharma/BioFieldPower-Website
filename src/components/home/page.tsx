"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Components
import Blog from "./Blog/Blog";
import AgriCard from "./Cards/AgriPVCard";
import Biomass from "./Cards/Biomass";
import CarbonCredit from "./Cards/CarbonCredit";
import ContactForm1 from "./Contacts/Contact";
import Details from "./Details/Details";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import WhatWeDo from "./Whatwedo/whatwedo";
import Support from "./SupportSection/Support";
import Pindgrid from "./Pindgrid/pindgrid";
import Impact from "./Impact/Impact";
import Ongoing from "./Ongoing/Ongoing";
import FindUs from "./FindUs/findus"; // ✅ Newly added FindUs section

export default function Home() {
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const blogRef = useRef(null);

  const isAboutInView = useInView(aboutRef, { once: true, margin: "-50px" });
  const isProductsInView = useInView(productsRef, { once: true, margin: "-50px" });
  const isBlogInView = useInView(blogRef, { once: true, margin: "-50px" });

  return (
    <div className="scroll-smooth">
      <Header />

      <motion.section
        id="pindgrid"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Pindgrid />
      </motion.section>

      <motion.section
        id="support"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Support />
      </motion.section>

      <motion.section
        id="about"
        ref={aboutRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Details />
      </motion.section>

      <motion.section
        id="whatwedo"
        initial={{ opacity: 0, y: 50 }}
        animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <WhatWeDo />
      </motion.section>

      <motion.section
        id="products"
        ref={productsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isProductsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Biomass />
        <AgriCard />
        <CarbonCredit />
      </motion.section>

      <motion.section
        id="ongoing"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Ongoing />
      </motion.section>

      <Impact />

      <motion.section
        id="blog"
        ref={blogRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isBlogInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Blog />
      </motion.section>

      <ContactForm1 />

      {/* ✅ New FindUs section added below Contact */}
      <motion.section
        id="findus"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <FindUs />
      </motion.section>

      <Footer />
    </div>
  );
}
