"use client";
import Header from '@/components/home/Header/Header';
import HeroSection from '@/components/home/Hero/Index';
import About from '@/components/home/Details/Details'
import Footer from '@/components/home/Footer/Footer'
import AgriPVCard from '@/components/home/Cards/AgriPVCard';
import Biomass from '@/components/home/Cards/Biomass';
import People from '@/components/home/people/people'
import Blog from '@/components/home/Blog/Blog'

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <About/>
      <AgriPVCard/>
      <Biomass/>
      <Blog/>
      <People/>
      <Footer/>

    </div>
  );
}
