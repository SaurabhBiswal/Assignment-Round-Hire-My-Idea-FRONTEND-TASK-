import React from 'react';
import { Apple, ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-social-proof">
        <div className="avatars">
          {/* Using placeholder images for avatars */}
          <img src="https://i.pravatar.cc/100?img=1" alt="User 1" />
          <img src="https://i.pravatar.cc/100?img=2" alt="User 2" />
          <img src="https://i.pravatar.cc/100?img=3" alt="User 3" />
          <img src="https://i.pravatar.cc/100?img=4" alt="User 4" />
          <div className="avatar-more">+</div>
        </div>
        <span className="trusted-text">Trusted by thousands of healthy families</span>
      </div>

      <h1 className="hero-title">
        The Safest Way to<br />
        Shop for Groceries
      </h1>

      <p className="hero-subtitle">
        Use the Olive Food Scanner App to Instantly Eliminate<br />
        Harmful Ingredients from Your Family's Diet and Get<br />
        Expert-Backed Food Insights
      </p>

      <div className="hero-ctas">
        <a href="#" className="btn-download">
          <Apple size={20} fill="currentColor" className="apple-icon" />
          <span>Download for iOS</span>
        </a>
        <a href="#" className="btn-community">
          Join the Olive Community <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
