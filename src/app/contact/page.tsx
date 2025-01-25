"use client";
import Footer from "@/components/home/Footer/Footer";
import Header from "@/components/home/Header/Header";

export default function Contact() {
  return (
    <div>

      <Header />

      <div className="bg-gray-300 py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-4 mt-12">Contact Us</h1>
          <p className="text-lg mb-8">
            We&apos;d love to hear from you! Reach out to us using the information below or via the contact form.
          </p>
          <div className=" text-1xl space-y-4 text-left">
            <p>
              <strong>Company Name:</strong> Biofield Power Private Limited
            </p>
            <p>
              <strong>Email Address:</strong>  info@biofieldpower.com
            </p>
            <p>
              <strong>Phone Number:</strong>  +91-8557897582
            </p>
            <p>
              <strong>LinkedIn Profile:</strong>{" "}
              <a
                href="https://www.linkedin.com/company/biofield-power/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/company/Biofield
              </a>
            </p>
            <p>
              <strong>Company Address:</strong> ROOM NO- 316/317, 3 FLOOR, M VISVESVARAYA, IIT Ropar, Rupnagar, Punjab, India
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 py-10 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Send Us a Message</h2>
        <p className="text-lg text-center mb-10">
          Feel free to reach out to us through this form!
        </p>
        <form className="max-w-xl mx-auto bg-white p-8 rounded shadow">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full mt-2 p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              className="w-full mt-2 p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full mt-2 p-2 border rounded"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
