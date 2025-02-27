'use client';
import Footer from '@/components/home/Footer/Footer';
import Header from '@/components/home/Header/Header';
import Link from 'next/link';
export default function CareerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Header />
      <div className="flex-grow bg-white-100 p-8">
        <h1 className="text-5xl font-bold text-gray-900 italic">Career</h1>
        <p className="text-lg text-gray-600 mt-2">
          Join Our Team of Skilled Architects and Designers and help us Create Innovative and Sustainable Solution.
        </p>
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
            <p className="text-center text-gray-500 text-xl">No openings available</p>
        </div>
        <div className="mt-8">
          <ul className="gap-4 flex">
            <li>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfHPtUx0tFN-uFkE8Bz_aG8EBTXhTkb9tUH0umyKFqJsjRvgQ/viewform" className="hover:text-green-800 text-4xl font-bold italic">
                Google Form
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
