import Link from "next/link";
import { FaSearch, FaUser, FaShoppingCart, FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <div className="text-2xl font-bold text-green-700">BioField</div>

      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          <FaBars className="text-gray-600 hover:text-green-700 cursor-pointer" />
        </button>
      </div>

      <nav className={`lg:flex ${isMenuOpen ? 'fixed inset-0 bg-black bg-opacity-50 z-50' : 'hidden'} lg:block `}>
        <div className="lg:hidden flex flex-col items-center justify-center space-y-6 bg-white w-full h-full">
          <div className="absolute top-4 right-4">
            <button onClick={toggleMenu}>
              <FaBars className="text-gray-600 text-2xl" />
            </button>
          </div>
          <Link href="/" className="text-2xl text-black hover:text-green-700" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/products" className="text-2xl text-black hover:text-green-700" onClick={toggleMenu}>
            Products
          </Link>
          <Link href="/about" className="text-2xl text-black hover:text-green-700" onClick={toggleMenu}>
            About Us
          </Link>
          <Link href="/blog" className="text-2xl text-black hover:text-green-700" onClick={toggleMenu}>
            Blog
          </Link>
          <Link href="/contact" className="text-2xl text-black hover:text-green-700" onClick={toggleMenu}>
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
        <FaSearch className="text-gray-600 hover:text-green-700 cursor-pointer" />
        <FaUser className="text-gray-600 hover:text-green-700 cursor-pointer" />
        <FaShoppingCart className="text-gray-600 hover:text-green-700 cursor-pointer" />
      </div>
    </header>
  );
}
