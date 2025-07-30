import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Zensark</h3>
            <p>Empowering Businesses with Personalized AI Solutions</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">AI Solutions</a></li>
                <li><a href="#services">Microsoft Dynamics</a></li>
                <li><a href="#services">Healthcare AI</a></li>
                <li><a href="#services">Financial Services</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#approach">Our Approach</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Zensark Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
