import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#555',
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
    color: '#777',
  },
  divider: {
    borderBottom: '1px solid #ddd',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  gridItem: {
    width: '48%',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '1px solid #ddd',
    paddingBottom: 5,
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  tableCell: {
    width: '25%',
    textAlign: 'right',
  },
  tableCellLeft: {
    width: '50%',
    textAlign: 'left',
  },
  footer: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 10,
    color: '#888',
  },
});

const InvoiceTemplate = ({ order }) => {
  // Debug: Log the order object to verify its structure
  console.log('Order:', order);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        
        <Text style={styles.header}>Invoice</Text>
        <Text style={styles.header}>APALI BOOK STORY </Text>

        {/* Client and Invoice Details */}
        <View style={styles.grid}>
          <View style={styles.gridItem}>
            <Text style={styles.label}>Client Name:</Text>
            <Text style={styles.text}>{order.name}</Text>
            <Text style={styles.text}>{order.email}</Text>
            <Text style={styles.text}>{order.phone}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.label}>Invoice Date:</Text>
            <Text style={styles.text}>{new Date().toLocaleDateString()}</Text>
            <Text style={styles.label}>Invoice No:</Text>
            <Text style={styles.text}>{order._id}</Text>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Order Details */}
        <View style={styles.section}>
          <Text style={styles.label}>Shipping Address:</Text>
          <Text style={styles.text}>
            {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}
          </Text>
        </View>

        {/* Products Table */}
        <View style={styles.section}>
          {/* <View style={styles.tableHeader}>
            <Text style={styles.tableCellLeft}>QTY DESCRIPTION {}</Text>
            <Text style={styles.tableCell}>PRICE</Text>
            <Text style={styles.tableCell}>SUBTOTAL</Text>
          </View> */}
          {order.products?.map((product, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCellLeft}>
                {product.quantity} x {product.bookName} {/* Display book name */}
              </Text>
              <Text style={styles.tableCell}>RS. {product.price}</Text>
              <Text style={styles.tableCell}>RS. {product.quantity * product.price}</Text>
            </View>
          ))}
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Payment Information */}
        <View style={styles.grid}>
          <View style={styles.gridItem}>
            <Text style={styles.label}>Payment Info:</Text>
            <Text style={styles.text}>Account No: 123567744</Text>
            <Text style={styles.text}>Routing No: 120000547</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.label}>Due By:</Text>
            <Text style={styles.text}>{new Date(order.createdAt).toLocaleDateString()}</Text>
            <Text style={styles.label}>Total Due:</Text>
            <Text style={styles.text}>RS. {order.totalPrice}</Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>Thank you for your business!</Text>
          <Text>Apali Book Store | hello@apalibookstore.com | 555 444 6666 | apalibookstore.com</Text>
        </View>
      </Page>
    </Document>
  );
};

export default InvoiceTemplate;