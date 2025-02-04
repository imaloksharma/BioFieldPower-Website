"use client";
import Blog from "./Blog/Blog";
import AgriCard from "./Cards/AgriPVCard";
import Biomass from "./Cards/Biomass";
import CarbonCredit from "./Cards/CarbonCredit";
import ContactForm1 from "./Contacts/Contact";
import Details from "./Details/Details";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Index from "./Hero/Index";
export default function Home() {
  return (
    <div className="scroll-smooth">
      <Header />
      <section id="home" className="lg:p-2">
        <Index />
      </section>
      <section id="about">
        <Details />
      </section>
      <section id="products">
        <AgriCard />
        <Biomass />
        <CarbonCredit />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <ContactForm1 />
      <Footer />
    </div>

  );
}
