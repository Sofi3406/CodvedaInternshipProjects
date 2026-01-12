import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Home() {
  const { message } = useContext(AppContext);

  return (
    <section className="page">
      <div className="hero">
        <h1 className="hero-title">Welcome to My App</h1>
        <p className="hero-subtitle">
          Explore GitHub users, learn about the project, or get in touch!
        </p>
        <div className="hero-actions">
          <a href="/search" className="cta-button">
            🚀 Start Searching Users
          </a>
        </div>
      </div>
      
      <div className="features">
        <h2 className="features-title">What you can do here:</h2>
        <ul className="features-list">
          <li>🔍 Search GitHub users with real-time debounced search</li>
          <li>⚡ Fast API calls optimized for performance</li>
          <li>📱 Responsive design that works on all devices</li>
          <li>🛡️ Error handling and loading states for smooth UX</li>
        </ul>
      </div>

      {message && (
        <div className="context-message">
          <p>{message}</p>
        </div>
      )}
    </section>
  );
}
