import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="footer bg-light text-light pt-4 bg-dark mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h5>About Us</h5>
            <p>
              We are a leading beauty brand offering a wide range of high-quality cosmetics and skincare products. Our mission is to empower individuals to feel confident and beautiful.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Contact Information</h5>
            <ul className="list-unstyled">
              <li>Email: support@bnbeauty.com</li>
              <li>Phone: +20  11253-4567</li>
              <li>Address: Egypt</li>
            </ul>
          </div>
        </div>
        <div className="text-center py-3 pt-5">
          <p> © {currentYear} BN Beauty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};