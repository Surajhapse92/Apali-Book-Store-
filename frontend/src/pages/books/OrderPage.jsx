import React, { useRef } from 'react';
import { useGetOrderByEmailQuery } from '../../redux/features/orders/ordersApi';
import { useAuth } from '../../context/AuthContext';
import { PDFDownloadLink } from '@react-pdf/renderer';
import InvoiceTemplate from './InvoiceTemplate'; // Create this component for the PDF template

const OrderPage = () => {
  const { currentUser } = useAuth();
  const { data: orders = [], isLoading, isError } = useGetOrderByEmailQuery(currentUser.email);

  if (isLoading) return <div className="text-center py-8">Loading...</div>;
  if (isError) return <div className="text-center py-8 text-red-600">Error fetching orders data.</div>;

  return (
    <div className="bg-white min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Orders</h2>
        {orders.length === 0 ? (
          <div className="text-center text-gray-600">No orders found!</div>
        ) : (
          <div className="space-y-6">
            {orders.map((order, index) => (
              <div
                key={order._id}
                className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <p className="inline-block px-3 py-1 bg-indigo-600 text-white text-sm font-semibold rounded-full mb-3">
                  Order #{index + 1}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Order Details</h3>
                    <p className="text-gray-600">
                      <span className="font-medium">Order ID:</span> {order._id}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Book:</span> {order._id}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Name:</span> {order.name}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Email:</span> {order.email}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Phone:</span> {order.phone}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Total Price:</span> ${order.totalPrice}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Shipping Address</h3>
                    <p className="text-gray-600">
                      {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-800">Products</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {order.productIds.map((productId) => (
                      <li key={productId}>{productId}</li>
                    ))}
                  </ul>
                </div>
                {/* Download Invoice Button */}
                <div className="mt-6">
                  <PDFDownloadLink
                    document={<InvoiceTemplate order={order} />}
                    fileName={`invoice_${order._id}.pdf`}
                  >
                    {({ loading }) =>
                      loading ? (
                        <button className="bg-gray-500 text-white px-4 py-2 rounded-lg">
                          Generating Invoice...
                        </button>
                      ) : (
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                          Download Invoice
                        </button>
                      )
                    }
                  </PDFDownloadLink>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPage;