"use client";
import React, { useState } from "react";
import axios from "axios";
import { CalendarIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";

const ContactForm1: React.FC = () => {
  const [formData, setFormData] = useState({
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
    let newErrors: { [key: string]: string } = {};
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

  const handleSubmit = async (e: React.FormEvent) => {
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
    } catch (err: any) {
      console.error("Email send error:", err.response?.data || err.message);
      setError(err.response?.data?.error || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black-100">
      <div className="container mx-auto px-2 py-8">
        <div className="bg-green-50 border border-gray-400 rounded-[20px] shadow-md p-4 sm:p-6 md:p-8 w-full max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="flex flex-col h-full px-2 sm:px-4 md:px-6">
              <h1 className="pt-2 text-3xl sm:text-4xl md:text-4xl text-green-800 mb-4 font-semibold">Contact Us</h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-3 leading-snug">
                "Connect with us to power a <span className='text-green-800 font-semibold'>greener tomorrow."</span>
              </p>
              <div className="flex justify-center md:justify-start mt-4">
                <button className="px-4 py-2 border border-gray-400 text-green-800 shadow hover:bg-green-200 transition rounded-md font-semibold flex items-center space-x-2 text-sm">
                  <CalendarIcon className="h-5 w-5 text-green-800" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-4 sm:p-6 md:p-8 shadow-md rounded-[15px] border border-gray-400 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(formData).map(([key, value]) => (
                <div key={key} className="col-span-2 sm:col-span-1">
                  <label className="block text-gray-800 text-sm font-medium mb-1">
                    {key.replace(/([A-Z])/g, ' $1').trim().replace(/^./, str => str.toUpperCase())}
                  </label>
                  {key === "message" ? (
                    <textarea name={key} value={value} onChange={handleChange} placeholder={`Enter your ${key}`} className="w-full bg-gray-100 text-gray-800 border-gray-300 rounded-md p-2 h-24 text-sm focus:outline-none focus:ring-2 focus:ring-green-600" />
                  ) : (
                    <input type={key.includes("email") ? "email" : key.includes("phone") ? "tel" : "text"} name={key} value={value} onChange={handleChange} placeholder={`Enter your ${key}`} className="w-full bg-gray-100 text-gray-800 border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600" />
                  )}
                  {errors[key] && <p className="text-red-500 text-xs mt-1">{errors[key]}</p>}
                </div>
              ))}

              <div className="col-span-2 flex justify-center md:justify-start">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="bg-green-700 text-white py-2 px-4 text-sm rounded-md shadow hover:bg-green-900 transition">
                  {loading ? "Sending..." : "Submit"}
                </motion.button>
              </div>

              {success && <p className="text-green-600 text-center mt-4">✅ Message sent successfully!</p>}
              {error && <p className="text-red-600 text-center mt-4">❌ {error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm1;
