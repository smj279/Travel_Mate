// src/pages/footer.jsx
import React from 'react';
import '../allCss/footer.css'; // Import the CSS for footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 TravelMate. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
          <a href="/terms-of-service" className="footer-link">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
