import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container mx-auto flex flex-wrap justify-between gap-5">
        <div className="w-full sm:w-1/4 lg:w-1/4">
          <h2 className="text-2xl text-green-800 font-semibold mb-3">BioField</h2>
          <p>Your trusted partner in all things health and wellness.</p>
        </div>
        <div className="w-full sm:w-1/4 lg:w-1/4">
          <h3 className="text-xl font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
            <li><Link href="/careers" className="hover:text-blue-400">Careers</Link></li>
            <li><Link href="/blog" className="hover:text-blue-400">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
            <li><Link href="/support" className="hover:text-blue-400">Support</Link></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/4 lg:w-1/4">
          <h3 className="text-xl font-semibold mb-3">Policies</h3>
          <ul className="space-y-2">
            <li><Link href="/faos" className="hover:text-blue-400">FAOS</Link></li>
            <li><Link href="/shipping-returns" className="hover:text-blue-400">Shipping & Returns</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-blue-400">Terms of Service</Link></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/4 lg:w-1/4">
          <h3 className="text-xl font-semibold mb-3">Subscribe</h3>
          <p className="mb-3">Stay updated with our latest news and offers.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="w-3/4 px-4 py-2 rounded-l-md text-black"
            />
            <button className="w-1/4 bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="mt-10 text-sm text-center border-t border-gray-700 pt-4">
        <p>&copy; 2025 BioField. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
