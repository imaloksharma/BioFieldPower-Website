"use client";
import Blog from "./Blog/Blog";
import AgriCard from "./Cards/AgriPVCard";
import Biomass from "./Cards/Biomass";
import Details from "./Details/Details";
import Footer from "./Footer/Footer";
// import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import Index from "./Hero/Index";
export default function Home() {
  return (
    <div className="scroll-smooth">
      <Header />
      <section id="home">
        <Index />
      </section>
      <section id="about">
        <Details />
      </section>
      <section id="products">
        <AgriCard />
        <Biomass />
      </section>
      <section id="blog">
        <Blog />
      </section>
      {/* <section id="contect">
        <Contact />
      </section> */}
      <Footer />
    </div>

  );
}
