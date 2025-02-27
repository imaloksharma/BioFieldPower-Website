'use client';
import Footer from '@/components/home/Footer/Footer';
import Header from '@/components/home/Header/Header';
import { useState } from 'react';
import Link from 'next/link';
type JobOpening = {
  position: string;
  location: string;
  type: string;
};
export default function CareerPage() {
  const [openings, setOpenings] = useState<JobOpening[]>([]);
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Header />
      <div className="flex-grow bg-white-100 p-8">
        <h1 className="text-5xl font-bold text-gray-900 italic">Career</h1>
        <p className="text-lg text-gray-600 mt-2">
          Join Our Team of Skilled Architects and Designers and help us Create Innovative and Sustainable Solution.
        </p>
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          {openings.length === 0 ? (
            <p className="text-center text-gray-500 text-xl">No openings available</p>
          ) : (
            <table className="w-full border-collapse border border-gray-300 mt-4">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-3 text-left">Position</th>
                  <th className="border p-3 text-left">Location</th>
                  <th className="border p-3 text-left">Type</th>
                </tr>
              </thead>
              <tbody>
                {openings.map((job, index) => (
                  <tr key={index} className="border">
                    <td className="border p-3">{job.position}</td>
                    <td className="border p-3">{job.location}</td>
                    <td className="border p-3">{job.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="mt-4">
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
