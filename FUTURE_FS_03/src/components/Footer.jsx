import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="visit" className="footer bg-dark">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-col">
            <h3>Aangan</h3>
            <p className="footer-desc">
              Experience the true taste of India. A celebration of spices, tradition, and family.
            </p>
            <div className="socials">
              <a href="#ig" className="social-link">Instagram</a>
              <a href="#fb" className="social-link">Facebook</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Visit Us</h4>
            <ul className="footer-links">
              <li>Ring Road</li>
              <li>Ranchi, Jharkhand</li>
              <li>India</li>
              <li className="mt-2"><a href="tel:+919876543210">+91 8235929286</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Hours</h4>
            <ul className="footer-links">
              <li>Mon-Sun: 11:30 AM - 10:30 PM</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Stay Connected</h4>
            <form className="newsletter-form">
              <input type="email" placeholder="Email Address" required />
              <button type="submit" className="btn btn-primary">Join</button>
            </form>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Aangan Indian Cuisine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
