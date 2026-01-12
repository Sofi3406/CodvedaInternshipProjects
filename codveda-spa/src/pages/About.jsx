import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function About() {
  const { setMessage } = useContext(AppContext);

  return (
    <section className="page">
      <div className="about-hero">
        <h1 className="about-title">About This Project</h1>
        <p className="about-subtitle">
          A modern React app showcasing API integration, state management, and performant search
        </p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2 className="section-title">🚀 Features</h2>
          <ul className="features-list">
            <li>GitHub API integration with debounced search</li>
            <li>React Router for SPA navigation</li>
            <li>Global state management with Context API</li>
            <li>Performance optimized with custom hooks</li>
            <li>Fully responsive Tailwind CSS design</li>
            <li>Error handling & loading states</li>
          </ul>
        </div>

        <div className="about-section">
          <h2 className="section-title">🛠 Tech Stack</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <span className="tech-icon">⚛️</span>
              <h3>React</h3>
              <p>Vite + Router + Context</p>
            </div>
            <div className="tech-card">
              <span className="tech-icon">📡</span>
              <h3>Axios</h3>
              <p>HTTP Client</p>
            </div>
            <div className="tech-card">
              <span className="tech-icon">🎨</span>
              <h3>Tailwind CSS</h3>
              <p>Utility-first styling</p>
            </div>
            <div className="tech-card">
              <span className="tech-icon">⚡</span>
              <h3>Vite</h3>
              <p>Fast build tool</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2 className="section-title">💡 Global State Demo</h2>
          <p className="demo-text">
            Click below to update the global message visible on Home page:
          </p>
          <button 
            onClick={() => setMessage("State updated from About page! 👋")}
            className="demo-button"
          >
            Update Global State
          </button>
        </div>
      </div>
    </section>
  );
}
