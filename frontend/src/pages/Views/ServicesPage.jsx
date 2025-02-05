import React from 'react';

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

  return (
    <div className="bg-gradient-to-br from-gray-100 to-white py-12">
      <div className="max-w-screen-xl mx-auto px-6 md:px-16">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl text-indigo-600 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-lg text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
