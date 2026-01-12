import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">🚀 MyApp</h3>
          <p className="footer-description">
            Modern React app with GitHub search, state management, and responsive design.
          </p>
          <div className="footer-social">
            <a href="#" className="social-link" aria-label="GitHub" title="GitHub">
              <span className="social-icon">🐙</span>
            </a>
            <a href="#" className="social-link" aria-label="Twitter" title="Twitter">
              <span className="social-icon">🐦</span>
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn" title="LinkedIn">
              <span className="social-icon">💼</span>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/" className="footer-link">Home</a></li>
            <li><a href="/search" className="footer-link">Search</a></li>
            <li><a href="/about" className="footer-link">About</a></li>
            <li><a href="/contact" className="footer-link">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Technologies</h4>
          <ul className="footer-links">
            <li className="footer-link">React </li>
            <li className="footer-link">Vite</li>
            <li className="footer-link">GitHub API</li>
            <li className="footer-link">Axios</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Contact Info</h4>
          <div className="footer-contact">
            <p className="footer-contact-item">
              <span className="contact-icon">📧</span>
              support@codveda.com
            </p>
            <p className="footer-contact-item">
              <span className="contact-icon">📱</span>
              +251 930 670 088
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2026 MyApp. Built with ❤️ for developers.
        </p>
      </div>
    </footer>
  );
}
