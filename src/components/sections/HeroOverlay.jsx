import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroOverlay = ({ onScrollToBooking }) => {
  return (
    <div className="hero-overlay">
      <div className="hero-text-content hero-overlay-text">
        <p className="hero-tagline">X6 FOLDABLE SERIES</p>
        <h1 className="hero-title">Engineered to Fold.<br />Built to Ride.</h1>
        <p className="hero-subtitle">
          Uncompromising trail performance meets compact utility. The ultimate full-sized folding mountain bike.
        </p>
        <div className="hero-ctas">
          <a href="#book-now" className="btn-primary-large" onClick={onScrollToBooking}>Book Now</a>
          <a href="#features" className="btn-secondary-large">Explore Specs</a>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <ChevronDown className="chevron-down" size={20} />
      </div>
    </div>
  );
};

export default HeroOverlay;
