import React from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <div className="contact-container bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Me</h1>

        {/* Contact Details */}
        <div className="flex flex-col items-center space-y-6 mb-10">
          <a
            href="tel:+918825350540"
            className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 transition-colors"
          >
            <FaPhone size={24} />
            <span className="text-lg font-medium">+91-8825350540</span>
          </a>
          <a
            href="mailto:triptibarnwal1@gmail.com"
            className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 transition-colors"
          >
            <FaEnvelope size={24} />
            <span className="text-lg font-medium">triptibarnwal1@gmail.com</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-10">
          <a
            href="https://instagram.com/myprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-pink-500 transition-colors"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://linkedin.com/in/myprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-700 transition-colors"
          >
            <FaLinkedin size={28} />
          </a>
        </div>

        {/* Download CV Button */}
        <div className="text-center mb-10">
          <a
            href="/path/to/cv.pdf"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>

        {/* Contact Form */}
        <form
          action="YOUR_BACKEND_ENDPOINT"
          method="POST"
          className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your E-mail"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              required
              placeholder="Enter your message"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
