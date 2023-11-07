import React from 'react';
import '../../styles/Footer.css'; // スタイルシートをインポート

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // 現在の年を取得

  return (
    <footer className="footer japanese-font">
      <div className="footer-content">
        <div className="footer-section">
          <h5>Company Name</h5>
          <p>Connecting the world through innovation.</p>
        </div>
        <div className="footer-section">
          <h5>Links</h5>
          <ul>
            <li><a href="#!">Home</a></li>
            <li><a href="#!">About Us</a></li>
            <li><a href="#!">Services</a></li>
            <li><a href="#!">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Contact Us</h5>
          <p>(123) 456-7890</p>
          <p>info@example.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
