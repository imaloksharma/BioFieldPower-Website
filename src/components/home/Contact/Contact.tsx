"use client";
import React from "react";
import { CalendarIcon } from "@heroicons/react/outline";
import Header from "@/components/home/Header/Header";

const ContactForm: React.FC = () => {
  return (
    <div>
      <Header />
    <div className="fixed inset-0 flex items-center justify-center bg-white p-4 sm:p-8 md:p-10">
      <div className="pt-6 bg-green-50 border border-gray-500 rounded-[30px] shadow-lg p-6 sm:p-8 md:p-10 w-full max-w-7xl overflow-y-auto max-h-[95vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="flex flex-col h-full">
            <div className="flex-grow text-center md:text-left">
              <h1 className=" pt-4 pl-3 text-65xl sm:text-6xl md:text-5xl text-green-800 mb-6 font-bold">
                Contact Us
              </h1>
            </div>
            <div className=" pl-3 flex-grow text-center md:text-left">
              <p className="text-4xl sm:text-7xl md:text-6xl text-gray-700 mb-4 leading-snug">
                &quot;Connect with us to power a <span className="text-green-800 font-semibold">greener tomorrow.&quot;</span>
              </p>
            </div>
            <div className=" pl-20 mb-20 flex justify-start md:justify-start">
              <button className="px-6 py-3 border border-gray-500 text-green-800 shadow hover:bg-green-200 transition rounded-lg text-bold flex items-center space-x-3">
                <CalendarIcon className="h-6 w-6 text-green-800" />
                <span>Book Your Free Consultation</span>
              </button>
            </div>
          </div>
          <form className="bg-white p-6 sm:p-8 md:p-10 shadow-lg rounded-[20px] border border-gray-500 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-gray-800 font-medium mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full bg-gray-100 text-gray-800 border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label className="block text-gray-800 font-medium mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full bg-gray-100 text-gray-800 border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label className="block text-gray-800 font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your Phone Number"
                className="w-full bg-gray-100 text-gray-800 border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label className="block text-gray-800 font-medium mb-2">Company Name</label>
              <input
                type="text"
                placeholder="Enter your Company Name"
                className="w-full bg-gray-100 text-gray-800 border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-gray-800 font-medium mb-2">Subject</label>
              <input
                type="text"
                placeholder="Enter your Subject"
                className="w-full bg-gray-100 text-gray-800 border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-gray-800 font-medium mb-2">Message</label>
              <textarea
                placeholder="E.g. Enter the message for Enquiry"
                className="w-full bg-gray-100 text-gray-800 border-gray-300 rounded-lg p-4 h-32 focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>
            </div>

            <div className="col-span-2 justify-start">
              <button
                type="submit"
                className="w-full sm:w-auto bg-green-700 text-white py-3 px-6 rounded-lg shadow hover:bg-green-800 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;
