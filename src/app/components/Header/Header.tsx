import Link from "next/link";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <div className="text-2xl font-bold text-green-700">BioField</div>
      <nav className="flex space-x-6">
        <div className="relative group">
          <Link href="/" className="hover:text-green-700">
            Home
          </Link>
          <div className="absolute hidden group-hover:block bg-white shadow-lg">
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/home/sub1" className="block px-4 py-2 hover:bg-gray-100">
                  Sub Item 1
                </Link>
              </li>
              <li>
                <Link href="/home/sub2" className="block px-4 py-2 hover:bg-gray-100">
                  Sub Item 2
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative group">
          <Link href="/products" className="hover:text-green-700">
            Products
          </Link>
          <div className="absolute hidden group-hover:block bg-white shadow-lg">
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/products/category1" className="block px-4 py-2 hover:bg-gray-100">
                  Category 1
                </Link>
              </li>
              <li>
                <Link href="/products/category2" className="block px-4 py-2 hover:bg-gray-100">
                  Category 2
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative group">
          <Link href="/about" className="hover:text-green-700">
            About Us
          </Link>
          <div className="absolute hidden group-hover:block bg-white shadow-lg">
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/about/mission" className="block px-4 py-2 hover:bg-gray-100">
                  Mission
                </Link>
              </li>
              <li>
                <Link href="/about/team" className="block px-4 py-2 hover:bg-gray-100">
                  Team
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Link href="/blog" className="hover:text-green-700">
          Blog
        </Link>
        <div className="relative group">
          <Link href="/contact" className="hover:text-green-700">
            Contact
          </Link>
          <div className="absolute hidden group-hover:block bg-white shadow-lg">
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/contact/support" className="block px-4 py-2 hover:bg-gray-100">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/contact/sales" className="block px-4 py-2 hover:bg-gray-100">
                  Sales
                </Link>
              </li>
            </ul>
          </div>
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
