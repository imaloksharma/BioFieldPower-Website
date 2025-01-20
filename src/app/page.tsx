"use client";
import Header from '@/app/components/Header/Header';
import HeroSection from '@/app/components/Hero/Index';
import Head from 'next/head';  // Import Head component

import './globals.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Custom Home Page Title</title>
        <meta name="description" content="Welcome to the home page!" />
      </Head>

      <Header />
      <HeroSection />
    </div>
  );
}
