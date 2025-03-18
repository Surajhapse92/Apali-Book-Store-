import React from "react";
import { Link } from "react-router-dom";
import img from '../../assets/Logo/booklogo.png';
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa"; // Import social media 
import img1 from "../../assets/profile/img1.jpg"
import img2 from "../../assets/profile/img2.jpg"
import img3 from "../../assets/profile/img3.jpg"

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center text-primary mb-8">
        About Apali Book Store
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src="https://img.freepik.com/free-photo/open-flying-old-books_1232-2096.jpg?ga=GA1.1.1106415470.1729422777&semt=ais_hybrid"
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Who We Are</h2>
          <p className="text-gray-600 mb-4">
            Apali Book Store is an online platform that provides easy access to books for all types of readers.
            Whether you're a student looking for study materials, or a book lover searching for the latest releases,
            we’ve got something for everyone. We strive to provide high-quality products with a simple and convenient
            shopping experience.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            Our mission is to create a seamless platform for purchasing books and educational materials, ensuring that
            students and readers have access to the resources they need, whenever they need them.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-4">What We Offer</h2>
          <ul className="text-gray-600 mb-4 list-disc pl-5">
            <li>Affordable and convenient book purchasing</li>
            <li>PDF resources and previous year question papers for students</li>
            <li>Fast and reliable delivery service</li>
            <li>Easy-to-use interface and secure payment system</li>
          </ul>

          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="btn-primary inline-block py-2 px-6 rounded-md text-white"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Profile Cards Section */}
      <div className="mt-16">
  <h2 className="text-2xl font-bold text-center text-primary mb-8">Meet Our Team</h2>
  <div className="grid md:grid-cols-3 gap-8">
    
    {/* Profile Card 1 - Prajakata */}
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
      <img src={img1} alt="Prajakata Tambe" className="w-32 h-32 rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-700">Prajakata Tambe</h3>
      <p className="text-gray-600 mb-2 font-medium">CEO & Founder</p>
      <p className="text-gray-600 mb-2">Web Developer</p>
      <p className="text-gray-600 mb-4">Prajakata is a skilled web developer passionate about building user-friendly, high-performance websites with modern technologies.</p>
      
      {/* Social Links */}
      <div className="flex justify-center space-x-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-600 hover:text-blue-700 text-2xl" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-blue-400 hover:text-blue-500 text-2xl" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-700 hover:text-gray-800 text-2xl" />
        </a>
      </div>
    </div>

    {/* Profile Card 2 - Trupti */}
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
      <img src={img2} alt="Trupti Dhoke" className="w-32 h-32 rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-700">Trupti Dhoke</h3>
      <p className="text-gray-600 mb-2 font-medium">Project Manager</p>
      <p className="text-gray-600 mb-2">Web Developer</p>
      <p className="text-gray-600 mb-4">Trupti is experienced in project management and ensures smooth coordination between development and execution.</p>
      
      {/* Social Links */}
      <div className="flex justify-center space-x-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-600 hover:text-blue-700 text-2xl" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-blue-400 hover:text-blue-500 text-2xl" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-700 hover:text-gray-800 text-2xl" />
        </a>
      </div>
    </div>

    {/* Profile Card 3 - Chitali */}
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
      <img src={img3} alt="Chitali Garud" className="w-32 h-32 rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-700">Chitali Garud</h3>
      <p className="text-gray-600 mb-2 font-medium">Support Engineer</p>
      <p className="text-gray-600 mb-2">Web Developer</p>
      <p className="text-gray-600 mb-4">Chitali provides essential support in debugging, troubleshooting, and optimizing web applications.</p>
      
      {/* Social Links */}
      <div className="flex justify-center space-x-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-600 hover:text-blue-700 text-2xl" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-blue-400 hover:text-blue-500 text-2xl" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-700 hover:text-gray-800 text-2xl" />
        </a>
      </div>
    </div>

  </div>
</div>

    </div>
  );
};

export default AboutUs;