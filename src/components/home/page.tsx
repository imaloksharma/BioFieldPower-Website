"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Blog from "./Blog/Blog";
import AgriCard from "./Cards/AgriPVCard";
import Biomass from "./Cards/Biomass";
import CarbonCredit from "./Cards/CarbonCredit";
import ContactForm1 from "./Contacts/Contact";
import Details from "./Details/Details";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Index from "./Hero/Index";
import WhatWeDo from "./Whatwedo/whatwedo";
import Support from "./SupportSection/Support"; // Import Support section
import Pindgrid from "./Pindgrid/pindgrid"; // Import Pindgrid section

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
      <section id="home" className="lg:p-2">
        <Index />
      </section>

      {/* Pindgrid Section */}
      <motion.section
        id="pindgrid"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Pindgrid />
      </motion.section>

      {/* Support Section */}
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

      {/* What We Do Section */}
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
        id="blog"
        ref={blogRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isBlogInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Blog />
      </motion.section>

      <ContactForm1 />
      <Footer />
    </div>
  );
}
