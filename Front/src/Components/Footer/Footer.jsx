import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>We provide high-quality products with excellent customer service. Our mission is to make shopping easy and enjoyable.</p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> &nbsp; 123-456-789</span>
            <span><i className="fas fa-envelope"></i> &nbsp; info@shopwebpage.com</span>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Special Offers</a></li>
            <li><a href="#">My Account</a></li>
          </ul>
        </div>

        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <form>
            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit" className="btn">Send</button>
          </form>
        </div>

        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Shop Webpage | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;