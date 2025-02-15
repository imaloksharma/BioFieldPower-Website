"use client";
import React from "react";
import { CalendarIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";

const ContactForm: React.FC = () => {
  return (
    <div className="bg-black-100">
      <div className="container mx-auto px-2 py-8">
        <div className="bg-green-50 border border-gray-400 rounded-[20px] shadow-md p-4 sm:p-6 md:p-8 w-full max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="flex flex-col h-full px-2 sm:px-4 md:px-6">
              <div className="flex-grow text-center md:text-left">
                <h1 className="pt-2 text-3xl sm:text-4xl md:text-4xl text-green-800 mb-4 font-semibold">
                  Contact Us
                </h1>
              </div>
              <div className="flex-grow text-center md:text-left">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-3 leading-snug">
                  &quot;Connect with us to power a {" "}
                  <span className="text-green-800 font-semibold">greener tomorrow.&quot;</span>
                </p>
              </div>
              <div className="flex justify-center md:justify-start mt-4">
                <button className="px-4 py-2 border border-gray-400 text-green-800 shadow hover:bg-green-200 transition rounded-md font-semibold flex items-center space-x-2 text-sm">
                  <CalendarIcon className="h-5 w-5 text-green-800" />
                  <span>Book Consultation</span>
                </button>
              </div>

            </div>

            <form className="bg-white p-4 sm:p-6 md:p-8 shadow-md rounded-[15px] border border-gray-400 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-gray-800 text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full bg-gray-100 text-gray-800 border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label className="block text-gray-800 text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full bg-gray-100 text-gray-800 border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label className="block text-gray-800 text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter your Phone Number"
                  className="w-full bg-gray-100 text-gray-800 border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label className="block text-gray-800 text-sm font-medium mb-1">Company Name</label>
                <input
                  type="text"
                  placeholder="Enter your Company Name"
                  className="w-full bg-gray-100 text-gray-800 border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-gray-800 text-sm font-medium mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="Enter your Subject"
                  className="w-full bg-gray-100 text-gray-800 border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-gray-800 text-sm font-medium mb-1">Message</label>
                <textarea
                  placeholder="E.g. Enter the message for Enquiry"
                  className="w-full bg-gray-100 text-gray-800 border-gray-300 rounded-md p-2 h-24 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                ></textarea>
              </div>

              <div className="col-span-2 flex justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-green-700 text-white py-2 px-4 text-sm rounded-md shadow hover:bg-green-900 transition"
                >
                  Submit
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
