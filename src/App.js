import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header'; // Ensure the path is correct
import ProductPage from './Components/ProductPage'; // Ensure the path is correct
import './App.css';
import FAQ from './Components/FAQ';
import ShippingPolicy from './Components/ShippingPolicy';
import Footer from './Components/Footer';
import Products from './Components/Products';

function App() {
  return (
    <Router>
      <div className="App">
        <Header className="header" />
        <Routes className="routes">
          <Route path="/" element={<ProductPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/produts" element={<Products/>} />
        </Routes>
        <Footer className="footer" />
      </div>
    </Router>
  );
}

export default App;
