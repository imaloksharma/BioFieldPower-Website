import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex justify-between items-center px-6 py-4 bg-white shadow-lg"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center space-x-2 text-green-700"
      >
        <img className="h-14 w-auto" src="/Img/logo.png" alt="Logo" />
        <span className="text-xl font-bold">Biofield Power</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="lg:hidden"
      >
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          <FaBars className="text-gray-600 hover:text-green-700 cursor-pointer text-xl" />
        </button>
      </motion.div>

      <nav className="hidden lg:flex space-x-6">
        <Link href="/" className="text-black hover:text-green-700">
          Home
        </Link>
        <Link href="#products" className="text-black hover:text-green-700">
          Products
        </Link>
        <Link href="#about" className="text-black hover:text-green-700">
          About Us
        </Link>
        <Link href="#blog" className="text-black hover:text-green-700">
          Blog
        </Link>
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
              <button onClick={toggleMenu} className="absolute top-4 right-4">
                <IoMdClose className="text-gray-600 text-2xl" />
              </button>

              <Link
                href="/"
                onClick={toggleMenu}
                className="text-2xl text-black hover:text-green-700"
              >
                Home
              </Link>
              <Link
                href="#products"
                onClick={toggleMenu}
                className="text-2xl text-black hover:text-green-700"
              >
                Products
              </Link>
              <Link
                href="#about"
                onClick={toggleMenu}
                className="text-2xl text-black hover:text-green-700"
              >
                About Us
              </Link>
              <Link
                href="#blog"
                onClick={toggleMenu}
                className="text-2xl text-black hover:text-green-700"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                onClick={toggleMenu}
                className="text-2xl text-black hover:text-green-700"
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
