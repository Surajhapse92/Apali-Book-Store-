import React from 'react';
import { motion } from 'framer-motion'; // For animations

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Fast Delivery',
      description:
        'We ensure fast and reliable delivery within 2-4 days to your location.',
      icon: '🚚',
    },
    {
      id: 2,
      title: 'Affordable Prices',
      description:
        'Our books come at competitive prices with various discounts and offers.',
      icon: '💰',
    },
    {
      id: 3,
      title: 'Quality Books',
      description:
        'We provide only the best quality books, from academic resources to novels.',
      icon: '📚',
    },
    {
      id: 4,
      title: 'Digital Resources',
      description:
        'We offer free access to digital books and PDFs, including past question papers.',
      icon: '💻',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      feedback:
        'Amazing service! The books arrived quickly and in perfect condition. Highly recommended!',
    },
    {
      id: 2,
      name: 'Jane Smith',
      feedback:
        'I love the affordable prices and the quality of the books. Great experience!',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      feedback:
        'The digital resources are a lifesaver for my studies. Thank you, Apali Book Store!',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-100 to-white py-12">
      <div className="max-w-screen-xl mx-auto px-6 md:px-16">
        {/* Services Section */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }} // Hover animation
              whileTap={{ scale: 0.95 }} // Click animation
            >
              <div className="text-5xl text-indigo-600 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-lg text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <div className="text-center mt-12">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">
            Explore More
          </button>
        </div>
 {/* Featured Books Section */}
      {/* <div className="max-w-screen-xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Featured Books
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredBooks.map((book) => (
            <motion.div
              key={book.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {book.title}
              </h3>
              <p className="text-lg text-gray-600 mb-2">By {book.author}</p>
              <p className="text-xl font-bold text-indigo-600">{book.price}</p>
            </motion.div>
          ))}
        </div>
      </div> */}
        {/* Testimonials Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }} // Hover animation
              >
                <p className="text-lg text-gray-600 italic mb-4">
                  "{testimonial.feedback}"
                </p>
                <p className="text-xl font-semibold text-gray-800">
                  - {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;