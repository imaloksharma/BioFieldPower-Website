"use client";
import Header from '@/app/components/Header/Header';
import HeroSection from '@/app/components/Hero/Index';
import About from '@/app/components/Details/Details'
import './globals.css';
import Footer from '@/app/components/Footer/Footer'
import People from '@/app/components/people/people'
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <About/>
      <People/>
      <Footer/>
    </div>
  );
}
