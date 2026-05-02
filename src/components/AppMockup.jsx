import React from 'react';
import { Heart, Share, ChevronDown } from 'lucide-react';
import './AppMockup.css';

export default function AppMockup() {
  return (
    <div className="app-mockup-wrapper">
      {/* Background blurred elements */}
      <div className="bg-blur left-blur"></div>
      <div className="bg-blur right-blur"></div>

      {/* The Phone */}
      <div className="phone-container">
        <div className="dynamic-island">
          <div className="sensor"></div>
          <div className="camera"></div>
        </div>

        <div className="phone-screen">
          <div className="product-image-container">
            {/* Using a placeholder or generated image would go here */}
            <div className="product-image-placeholder">
              <span>Fig & Olive<br/>Crackers</span>
            </div>
            <div className="back-button">
               <ChevronDown size={24} color="#fff" style={{ transform: 'rotate(90deg)' }} />
            </div>
          </div>

          <div className="product-info-card">
            <h2 className="product-title">Fig and Olive Crackers, Fig and Olive</h2>
            <p className="product-brand">Lesley Stowe</p>

            <div className="score-section">
              <div className="score-display">
                <div className="score-dot avoid"></div>
                <div className="score-text">
                  <span className="score-number">46</span><span className="score-total">/100</span>
                </div>
              </div>
              <div className="score-actions">
                <button className="icon-btn"><Heart size={20} color="#666" /></button>
                <button className="icon-btn"><Share size={20} color="#666" /></button>
              </div>
            </div>
            <div className="score-label">Avoid</div>

            <div className="oliver-says-card">
              <div className="oliver-header">
                <span className="oliver-icon">🍏</span>
                <h3>Oliver Says:</h3>
              </div>
              <p className="oliver-text">
                "This product's low score mainly comes from the processed sugars, like honey and brown sugar, which can impact your family's health when consumed frequently, especially for kids who are still developing. Additionally, there are several additives that aren't ideal for your goal of avoiding processed foods, making this a choice to consider more carefully."
              </p>
              <div className="breakdown-btn">Breakdown <ChevronDown size={16} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
