import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-10 bg-white">
      <div className="flex flex-wrap justify-start gap-10 container mx-auto">
        <div className="w-full sm:w-1/4 lg:w-1/5">
        <div className="flex items-center space-x-2 text-green-700">
        <img className="h-10 w-auto" src="/Img/logo.png" alt="Logo" />
        <span className="text-xl font-bold">BioField Power</span>
      </div>          <div className="flex gap-3 mt-3">
            <a href="https://facebook.com" aria-label="Facebook" className="text-gray-500 hover:text-green-800">
              <FaFacebook size={30} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-gray-500 hover:text-green-800">
              <FaInstagram size={30} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="text-gray-500 hover:text-green-800">
              <FaTwitter size={30} />
            </a>
          </div>
        </div>
        <div className="w-full justify-center sm:w-1/4 lg:w-1/5">
          <h3 className="text-xl font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-green-800">  About Us</Link></li>
            <li><Link href="/careers" className="hover:text-green-800">  Careers</Link></li>
            <li><Link href="/press" className="hover:text-green-800">  Press</Link></li>
            <li><Link href="/blog" className="hover:text-green-800">  Blog</Link></li>
            <li><Link href="/contact" className="hover:text-green-800">  Contact</Link></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/4 lg:w-1/5">
          <h3 className="text-xl font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li><Link href="/help-center" className="hover:text-green-800">Help Center</Link></li>
            <li><Link href="/faqs" className="hover:text-green-800">FAQs</Link></li>
            <li><Link href="/shipping-returns" className="hover:text-green-800">Shipping & Returns</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-green-800">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-green-800">Terms of Service</Link></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/4 lg:w-1/4">
          <h4 className="text-xl font-semibold mb-3">Subscribe to our newsletter</h4> 
          <p className="text-gray-600 mb-4">Stay updated with our latest news and offers.</p>
          <form className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-neutral-200 text-gray-700 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"/>
            <button
              type="submit"
              aria-label="Subscribe"
              className="bg-white text-black px-4 py-2 border border-gray-500 rounded-md hover:bg-green-500 transition-colors duration-200"
              >
              Subscribe 
            </button>
          </form>
        </div>

      </div>
      <div className="mt-10 text-sm text-center border-t border-gray-300 pt-4 text-gray-600">
        <p>&copy; 2025 BioField. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
