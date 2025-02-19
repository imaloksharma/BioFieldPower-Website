
"use client";
import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { motion } from "framer-motion";
import { CalendarIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Header from "@/components/home/Header/Header";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  companyEmail: string;
  companyPhone: string;
  location: string;
  message: string;
}

const ContactForm1: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    companyEmail: "",
    companyPhone: "",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const response = await axios.post("/api/sendEmail", formData);
      if (response.status === 200) {
        setSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          companyName: "",
          companyEmail: "",
          companyPhone: "",
          location: "",
          message: "",
        });
        setErrors({});
      }
    } catch (err: unknown) {
      const error = err as AxiosError<{ error?: string }>;
      console.error("Email send error:", error.response?.data || error.message);
      setError(error.response?.data?.error || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black-100">
      <Header />
    <div className="container mx-auto px-2 py-8">
      <div className="bg-green-50 border border-gray-400 rounded-[20px] shadow-md p-4 sm:p-6 md:p-8 w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="flex flex-col h-full px-2 sm:px-4 md:px-6">
            <div className="flex-grow text-center md:text-left">
              <h1 className="pt-2 text-3xl sm:text-4xl md:text-4xl text-green-800 mb-4 font-semibold">
                Contact Us
              </h1>
            </div>
            <div className="justify-center flex-grow text-center md:text-left flex flex-col items-center">
            <Image width={100} height={100}
         src="/contactperson.png"
         alt="Carbon Credit"
         className="w-3/4 h-120 justify-right object-cover rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px] rounded-tr-[30px]"
       />
             <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-3 leading-snug">
               &quot;Connect with us to power a {" "}
               <span className="text-green-800 font-semibold">greener tomorrow.&quot;</span>
             </p>
           </div>
           <div className="flex justify-center  mt-4">
             <button className="px-4 py-2 border border-gray-400 text-green-800 shadow hover:bg-green-200 transition rounded-md font-semibold flex items-center space-x-2 text-sm">
               <CalendarIcon className="h-5 w-5 text-green-800" />
               <span>Book Consultation</span>
             </button>
           </div>
         </div>


            <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-md border border-gray-400 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(formData).map(([key, value]) => (
                key !== "location" && (
                  <div key={key} className="col-span-2 sm:col-span-1">
                    <label className="block text-gray-800 text-sm font-medium mb-1">
                      {key.replace(/([A-Z])/g, " $1").trim().replace(/^./, (str) => str.toUpperCase())}
                    </label>
                    {key === "message" ? (
                      <textarea
                        name={key}
                        value={value}
                        onChange={handleChange}
                        placeholder={`Enter your ${key}`}
                        className="w-full bg-gray-100 text-gray-800 border-gray-300 rounded-md p-1 h-8 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                      />
                    ) : (
                      <input
                        type={key.includes("email") ? "email" : key.includes("phone") ? "tel" : "text"}
                        name={key}
                        value={value}
                        onChange={handleChange}
                        placeholder={`Enter your ${key}`}
                        className="w-full bg-gray-100 text-gray-800 border-gray-300 rounded-md p-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                      />
                    )}
                    {errors[key] && <p className="text-red-500 text-xs mt-1">{errors[key]}</p>}
                  </div>
                )
              ))}

              <div className="col-span-2 sm:col-span-1">
                <label className="block text-gray-800 text-sm font-medium mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  className="w-full bg-gray-100 text-gray-800 border-gray-300 rounded-md p-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                </div>
                <div className="col-span-1">
                <iframe width="100%" height="100" title="Google Map" className="rounded-md border border-gray-300 shadow mt-2" src={`https://maps.google.com/maps?q=${encodeURIComponent(formData.location.trim() || "IIT Ropar")}&output=embed`}></iframe>
              </div>
                 <div className="col-span-2 flex justify-center md:justify-start">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="bg-green-600 text-white py-2 px-4 text-sm rounded-md shadow hover:bg-green-900 transition">
                  {loading ? "Sending..." : "Submit"}
                </motion.button>
              </div>

              {success && <p className="text-green-600 text-center mt-">✅ Message sent successfully!</p>}
              {error && <p className="text-red-600 text-center mt-2">❌ {error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm1;
