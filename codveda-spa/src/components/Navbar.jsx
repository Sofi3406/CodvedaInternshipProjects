import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          `nav-link ${isActive ? 'active' : ''}`
        }
      >
        Home
      </NavLink>
      <NavLink 
        to="/about" 
        className={({ isActive }) => 
          `nav-link ${isActive ? 'active' : ''}`
        }
      >
        About
      </NavLink>
      <NavLink 
        to="/contact" 
        className={({ isActive }) => 
          `nav-link ${isActive ? 'active' : ''}`
        }
      >
        Contact
      </NavLink>
      <NavLink 
        to="/search" 
        className={({ isActive }) => 
          `nav-link ${isActive ? 'active' : ''}`
        }
      >
        Search
      </NavLink>
    </nav>
  );
}
