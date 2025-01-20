import Link from "next/link";
import { FaSearch, FaUser, FaShoppingCart, FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-lg">
      <div className="flex items-center space-x-2 text-green-700">
        <img className="h-10 w-auto" src="/Img/logo.png" alt="Logo" />
        <span className="text-xl font-bold">BioField Power</span>
      </div>

      <div className="lg:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          <FaBars className="text-gray-600 hover:text-green-700 cursor-pointer text-xl" />
        </button>
      </div>

      <nav
        className={`${
          isMenuOpen ? "fixed inset-0 bg-black bg-opacity-50 z-50" : "hidden"
        } lg:flex lg:relative lg:inset-auto lg:bg-transparent lg:z-auto lg:space-x-6`}
      >
        <div
          className={`${
            isMenuOpen
              ? "flex flex-col items-center justify-center w-full h-full bg-white space-y-6"
              : "hidden"
          } lg:hidden`}
        >
          <button onClick={toggleMenu} className="absolute top-4 right-4">
            <FaBars className="text-gray-600 text-2xl" />
          </button>
          <Link href="/" onClick={toggleMenu} className="text-2xl text-black hover:text-green-700">
            Home
          </Link>
          <Link href="/products" onClick={toggleMenu} className="text-2xl text-black hover:text-green-700">
            Products
          </Link>
          <Link href="/about" onClick={toggleMenu} className="text-2xl text-black hover:text-green-700">
            About Us
          </Link>
          <Link href="/blog" onClick={toggleMenu} className="text-2xl text-black hover:text-green-700">
            Blog
          </Link>
          <Link href="/contact" onClick={toggleMenu} className="text-2xl text-black hover:text-green-700">
            Contact
          </Link>
        </div>

        <div className="hidden lg:flex space-x-6">
          <Link href="/" className="text-black hover:text-green-700">
            Home
          </Link>
          <Link href="/products" className="text-black hover:text-green-700">
            Products
          </Link>
          <Link href="/about" className="text-black hover:text-green-700">
            About Us
          </Link>
          <Link href="/blog" className="text-black hover:text-green-700">
            Blog
          </Link>
          <Link href="/contact" className="text-black hover:text-green-700">
            Contact
          </Link>
        </div>
      </nav>

      <div className="flex items-center space-x-4">
        <FaSearch className="text-gray-600 hover:text-green-700 cursor-pointer text-xl" />
        <FaUser className="text-gray-600 hover:text-green-700 cursor-pointer text-xl" />
        <FaShoppingCart className="text-gray-600 hover:text-green-700 cursor-pointer text-xl" />
      </div>
    </header>
  );
}
