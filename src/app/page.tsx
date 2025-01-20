"use client";
import Header from '@/./app/components/Header/Header';
import HeroSection from '@/./app/components/Hero/Index';

import './globals.css';
import AgriPVCard from './components/Cards/AgriPVCard';
import Biomass from './components/Cards/Biomass';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Biomass />
      <AgriPVCard />
    </div>
  );
}
