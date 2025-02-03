import React from 'react'
import footerLogo from "../assets/footer-logo.png"
import { FaFacebook, FaInstagram, FaTwitter, FaPinterestP, FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      {/* Title & Logo Section */}
      <div className="container mx-auto flex items-center justify-start mb-8">
        <img src={footerLogo} alt="Logo" className="w-24 mr-3" /> {/* Smaller logo size */}
        <h2 className="text-2xl font-bold">Apali Book Store</h2>
      </div>

      {/* Top Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side - Contact Information */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h4 className="text-xl font-bold mb-2">Contact</h4>
          <p className="mb-1">
            <strong>Address:</strong> 562 Wellington Road, Street 32, San Francisco
          </p>
          <p className="mb-1">
            <strong>Phone:</strong> +91 1234567890
          </p>
          <p className="mb-4">
            <strong>Hours:</strong> 10.00 am - 11.00 pm, Mon - Sat
          </p>
          <div>
            <h4 className="text-lg font-semibold mb-2">Follow us</h4>
            <div className="flex justify-center md:justify-start gap-4 text-2xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <FaInstagram />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <FaPinterestP />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        

        {/* Right Side - Newsletter */}
        <div className="md:w-1/2 w-full">
          <p className="mb-4 text-center md:text-left">
            Subscribe to our newsletter to receive the latest updates, news, and offers!
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md text-black"
            />
            <button className="bg-primary px-6 py-2 rounded-r-md hover:bg-primary-dark">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
        {/* Left Side - Privacy Links */}
        <ul className="flex gap-6 mb-4 md:mb-0">
          <li>
            <a href="#privacy" className="hover:text-primary">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#terms" className="hover:text-primary">
              Terms of Service
            </a>
          </li>
        </ul>

        {/* Right Side - Social Icons */}
        <div className="flex gap-6">
        <p className="text- text-sm">
         v--00.1
        </p>
      </div>
      </div>

      {/* Copyright Section */}
      <div className="container mx-auto mt-4">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Copyright by Suraj Hapse. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
