"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  const isHomePage = pathname === "/";
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex justify-between items-center px-6 py-4 bg-white shadow-lg"
    >
      <Link href="/">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center space-x-2 text-green-700"
        >
          <Image width={80} height={80} className="h-14 w-auto" src="/Img/logo.png" alt="Logo" />
          <span className="text-xl font-bold">Biofield Power</span>
        </motion.div>
      </Link>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="lg:hidden"
      >
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
          <FaBars className="text-gray-600 hover:text-green-700 cursor-pointer text-xl" />
        </button>
      </motion.div>
      <nav className="hidden lg:flex space-x-6">
        <Link href="/" className="text-black hover:text-green-700">
          Home
        </Link>
        <Link href="/about" className="text-black hover:text-green-700">
          About Us
        </Link>
        <Link href="/mission" className="text-black hover:text-green-700">
          Our Mission
        </Link>
        {isHomePage && (
          <>
            <Link href="#blog" className="text-black hover:text-green-700">
              Blog
            </Link>
            <Link href="#products" className="text-black hover:text-green-700">
              Products
            </Link>
          </>
        )}
        <Link href="/contact" className="text-black hover:text-green-700">
          Contact
        </Link>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full bg-white flex flex-col items-center justify-center space-y-6"
            >
              <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4">
                <IoMdClose className="text-gray-600 text-2xl" />
              </button>

              <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl text-black hover:text-green-700">
                Home
              </Link>
              {isHomePage && (
                <>
                  <Link href="#blog" onClick={() => setIsMenuOpen(false)} className="text-2xl text-black hover:text-green-700">
                    Blog
                  </Link>
                  <Link href="#products" onClick={() => setIsMenuOpen(false)} className="text-2xl text-black hover:text-green-700">
                    Products
                  </Link>
                </>
              )}
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-2xl text-black hover:text-green-700">
                About Us
              </Link>
              <Link href="/mission" onClick={() => setIsMenuOpen(false)} className="text-2xl text-black hover:text-green-700">
              Our Mission
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-2xl text-black hover:text-green-700">
                Contact
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
