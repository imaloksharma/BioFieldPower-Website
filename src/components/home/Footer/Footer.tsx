import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          <div>
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul>
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Company</h3>
            <ul>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
              <li><a href="/support" className="hover:underline">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <p>Biofield Power Pvt. Ltd.</p>
            <p>ROOM NO- 316/317, 3 FLOOR, M VISVESVARAYA,<br />
              IIT Ropar, Rupnagar, Punjab, India. 140001
            </p>
            <p>+91-85578-97582</p>
            <p>info@biofieldpower.com</p>
          </div>
        </div>
        <div className="mt-8 border-t border-white pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} Biofield Power Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
