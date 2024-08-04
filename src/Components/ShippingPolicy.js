import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; 

const ShippingPolicy = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="policy-section p-4">
            <h4>Shipping Policy</h4>
            <p>
              We offer international shipping to most countries. Shipping costs and delivery times vary based on your location. Orders are processed within 2-3 business days, and you will receive an email confirmation once your order has shipped. Please note that customs fees and import taxes are the responsibility of the customer.
            </p>
            <h5>Delivery Times</h5>
            <ul>
              <li>Standard Shipping: 5-7 business days</li>
              <li>Express Shipping: 2-3 business days</li>
              <li>International Shipping: 7-14 business days</li>
            </ul>
            <h5>Shipping Costs</h5>
            <p>
              Shipping costs are calculated at checkout based on your location and the shipping method selected. Free shipping is available on orders over $100.
            </p>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="policy-section p-4">
            <h4>Return Policy</h4>
            <p>
              You can return any item within 30 days of purchase if it is unused and in its original packaging. To initiate a return, please contact our customer service team with your order number and reason for return. Once your return is approved, you will receive instructions on how to send back your items.
            </p>
            <h5>Return Process</h5>
            <ol>
              <li>Contact customer service to initiate a return.</li>
              <li>Receive return authorization and instructions.</li>
              <li>Send back the items using the provided shipping label.</li>
              <li>Receive a refund within 7-10 business days after we receive your return.</li>
            </ol>
            <h5>Refund Policy</h5>
            <p>
              Refunds will be processed within 7-10 business days after we receive your return. The refund will be issued to the original payment method. Please note that shipping costs are non-refundable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
