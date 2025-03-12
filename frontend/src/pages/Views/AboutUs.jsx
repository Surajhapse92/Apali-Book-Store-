import React from "react";
import { Link } from "react-router-dom";
import img from '../../assets/Logo/booklogo.png';
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa"; // Import social media icons

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
          {/* Profile Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src={img}
              alt="Team Member 1"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700">John Doe</h3>
            <p className="text-gray-600 mb-2">CEO & Founder</p>
            <p className="text-gray-600 mb-4">
              John is passionate about books and has over 10 years of experience in the publishing industry.
            </p>
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

          {/* Profile Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src={img}
              alt="Team Member 2"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700">Jane Smith</h3>
            <p className="text-gray-600 mb-2">Marketing Director</p>
            <p className="text-gray-600 mb-4">
              Jane specializes in digital marketing and has a knack for connecting readers with the right books.
            </p>
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

          {/* Profile Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src={img}
              alt="Team Member 3"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700">Mike Johnson</h3>
            <p className="text-gray-600 mb-2">Head of Operations</p>
            <p className="text-gray-600 mb-4">
              Mike ensures that all operations run smoothly, from inventory management to customer service.
            </p>
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