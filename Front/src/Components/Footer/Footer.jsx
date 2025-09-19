import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>About Us</h3>
            <p>Keels is a leading retail brand committed to providing high-quality products at affordable prices.</p>
          </div>
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Promotions</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contact Info</h3>
            <p><i className="fa fa-map-marker"></i> 123 Main Street, Colombo, Sri Lanka</p>
            <p><i className="fa fa-phone"></i> +94 123 456789</p>
            <p><i className="fa fa-envelope"></i> info@keels.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Keels. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer