"use client";
import Header from '@/app/components/Header/Header';
import HeroSection from '@/app/components/Hero/Index';
import About from '@/app/components/Details/Details'
import './globals.css';
import Footer from '@/app/components/Footer/Footer'
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <About/>
      <Footer/>
    </div>
  );
}
