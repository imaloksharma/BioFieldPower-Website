import Link  from 'next/link';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import Image from "next/image";

const Footer = () => {
  return (
    
    <footer className="py-10 bg-gray-100">
      <div className="bg-grey-50 container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-2 text-green-700">
              <Image width={80} height={80} className="h-14 w-auto" src="/Img/logo.png" alt="Logo" />
              <span className="text-xl font-bold">Biofield Power</span>
            </div>
            <div className="flex gap-3 mt-3">
              <a href="https://www.linkedin.com/company/biofield-power/" aria-label="Linkdin" className="text-gray-500 hover:text-green-800">
                <FaLinkedin size={30} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-500 hover:text-green-800">
                <FaInstagram size={30} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-gray-500 hover:text-green-799">
                <FaTwitter size={30} />
              </a>
            </div>
          </div>
    

          <div >
            <h3 className="text-xl  font-semibold mb-3">Company</h3>
            <ul className="gap-4  flex">
              <li><Link href="#about" className="hover:text-green-800">About Us</Link></li>
              <li><Link href="https://docs.google.com/forms/d/e/1FAIpQLSfHPtUx0tFN-uFkE8Bz_aG8EBTXhTkb9tUH0umyKFqJsjRvgQ/viewform" className="hover:text-green-800">Careers</Link></li>
              {/* <li><Link href="/press" className="hover:text-green-800">Press</Link></li> */}
              <li><Link href="#blog" className="hover:text-green-800">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-green-800">Contact</Link></li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-xl font-semibold mb-3">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/help-center" className="hover:text-green-800">Help Center</Link></li>
              <li><Link href="/faqs" className="hover:text-green-800">FAQs</Link></li>
              <li><Link href="/shipping-returns" className="hover:text-green-800">Shipping & Returns</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-green-800">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-green-800">Terms of Service</Link></li>
            </ul>
          </div> */}

          {/* <div>
            <h4 className="text-xl font-semibold mb-3">Subscribe to our newsletter</h4>
            <p className="text-gray-600 mb-4">Stay updated with our latest news and offers.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-neutral-200 text-gray-700 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-white text-black px-4 py-2 border border-gray-500 rounded-md hover:bg-green-500 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>

        <div className="mt-10 text-sm text-center border-t border-gray-300 pt-4 text-gray-600">
          <p>&copy; 2025 Biofield Power. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
