
import React, { useState } from 'react';
import './Footer.css';

function Footer() {
  const [emailValue, setEmailValue] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailValue) {
      setIsSubscribed(true);
      setEmailValue('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer">
      {/* Footer top wave animation */}
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#222" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,117.3C672,128,768,192,864,202.7C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3 className="animated-underline">About Us</h3>
            <p>Keels is a leading retail brand committed to providing high-quality products at affordable prices.</p>
            <div className="social-icons">
              <a href="#" className="social-icon-link facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon-link twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon-link instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon-link linkedin"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          
          <div className="footer-section links">
            <h3 className="animated-underline">Quick Links</h3>
            <ul className="quick-links">
              <li><a href="#"><i className="fas fa-chevron-right"></i>Home</a></li>
              <li><a href="#"><i className="fas fa-chevron-right"></i>Products</a></li>
              <li><a href="#"><i className="fas fa-chevron-right"></i>Promotions</a></li>
              <li><a href="#"><i className="fas fa-chevron-right"></i>Contact Us</a></li>
              <li><a href="#"><i className="fas fa-chevron-right"></i>Blog</a></li>
            </ul>
          </div>
          
          <div className="footer-section contact">
            <h3 className="animated-underline">Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt pulse"></i> 
                <span>123 Main Street, Colombo, Sri Lanka</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone-alt pulse"></i> 
                <span>+94 123 456789</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope pulse"></i> 
                <span>info@keels.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock pulse"></i> 
                <span>Mon - Sat: 9:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>
          
          <div className="footer-section newsletter">
            <h3 className="animated-underline">Newsletter</h3>
            <p>Subscribe to receive updates on our latest products and special offers!</p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Your Email Address"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  required
                />
                <button type="submit" className="btn-subscribe">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
              {isSubscribed && <div className="subscribe-message">Thank you for subscribing!</div>}
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Keels. All Rights Reserved.</p>
          </div>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">FAQ</a>
          </div>
        </div>
      </div>
      
      <button className="back-to-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <i className="fas fa-chevron-up"></i>
      </button>
    </footer>
  );
}

export default Footer

