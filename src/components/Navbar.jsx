import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar container">
      <div className="navbar-logo">
        {/* Placeholder for the Olive logo */}
        <span className="logo-icon">🍏</span>
        <span className="logo-text">live</span>
      </div>

      <ul className="navbar-links">
        <li>
          <a href="#">Solutions <ChevronDown size={14} /></a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Blog <ChevronDown size={14} /></a>
        </li>
        <li>
          <a href="#">Restaurants</a>
        </li>
        <li>
          <a href="#">Food <ChevronDown size={14} /></a>
        </li>
      </ul>

      <div className="navbar-actions">
        <a href="#" className="sign-in">Sign in</a>
        <a href="#" className="get-olive-btn">
          Get Olive <ArrowRight size={16} />
        </a>
      </div>
    </nav>
  );
}
