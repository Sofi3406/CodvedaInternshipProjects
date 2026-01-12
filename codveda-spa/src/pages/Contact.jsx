import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setStatus('Thanks for your message! We\'ll get back to you soon. 🚀');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section className="page">
      <div className="contact-hero">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-subtitle">
          Have questions about the project or want to collaborate? Send us a message!
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2 className="info-title">Contact Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-icon">📧</span>
              <p>support@codveda.com</p>
            </div>
            <div className="info-item">
              <span className="info-icon">🌐</span>
              <p>www.codveda.com</p>
            </div>
            <div className="info-item">
              <span className="info-icon">📱</span>
              <p>+251 930 670 088</p>
            </div>
          </div>

          <div className="social-links">
            <h3 className="social-title">Follow Us</h3>
            <div className="social-icons">
              <a href="#" className="social-link" aria-label="GitHub">
                <span className="social-icon">🐙</span>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span className="social-icon">🐦</span>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span className="social-icon">💼</span>
              </a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Send a Message</h2>
          
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}
