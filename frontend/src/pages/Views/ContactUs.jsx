import React, { useState } from 'react';

const OfficeContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-white p-12">
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 py-16 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Contact Our Office
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Section - Office Information */}
          <div className="p-8 bg-gray-50 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Office</h3>
            <div className="mb-4">
              <p className="text-lg text-gray-600"><strong>Address:</strong> 1234 Office St, Suite 567, City, State, ZIP</p>
              <p className="text-lg text-gray-600"><strong>Email:</strong> contact@apalibookstore.com</p>
              <p className="text-lg text-gray-600"><strong>Phone:</strong> (123) 456-7890</p>
            </div>
            <div className="mb-4">
              <h4 className="text-xl font-semibold text-gray-700">Office Hours:</h4>
              <ul className="text-lg text-gray-600">
                <li>Monday to Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 3:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
            {/* Add Office Location Image */}
            <div className="mt-8">
              <img
                src="https://img.freepik.com/premium-vector/welcome-back-school-with-equipment-ready-study_3589-974.jpg?ga=GA1.1.1106415470.1729422777&semt=ais_hybrid" // Replace with your office image URL
                alt="Office"
                className="w-full h-64 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-gradient-to-r from-indigo-100 to-teal-100 p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Get in Touch</h3>

            {isSubmitted ? (
              <div className="text-center text-green-600">
                <h3 className="text-2xl font-semibold">Thank you for your message!</h3>
                <p className="mt-4">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-lg font-medium text-gray-700">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-lg font-medium text-gray-700">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-lg font-medium text-gray-700">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-teal-400 to-indigo-500 text-white font-semibold rounded-md hover:from-teal-500 hover:to-indigo-600 transition duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeContactPage;
