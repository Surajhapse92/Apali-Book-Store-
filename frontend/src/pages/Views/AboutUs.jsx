import React from "react";
import { Link } from "react-router-dom";

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
    </div>
  );
};

export default AboutUs;
