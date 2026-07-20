import React from 'react';
import { STATIC_FEATURES } from '../../constant';
import { getS3FrameUrl } from '../../config/s3';

const StaticFallback = ({ onScrollToBooking }) => {
  return (
    <div className="static-fallback-container" id="overview">
      <div className="hero-text-content" style={{ opacity: 1 }}>
        <p className="hero-tagline">X6 Foldable Series</p>
        <h1 className="hero-title">Engineered to Fold.<br />Built to Ride.</h1>
        <p className="hero-subtitle">
          Uncompromising performance meets absolute portability. The X6 mountain bike delivers a rugged trail experience with a high-tensile frame that packs down in seconds.
        </p>
        <div className="hero-ctas">
          <a href="#book-now" className="btn-primary-large" onClick={onScrollToBooking}>Book Now</a>
          <a href="#specs" className="btn-secondary-large">Specifications</a>
        </div>
      </div>

      <img
        src={getS3FrameUrl(1)}
        alt="X6 Series Mountain Bike Side Profile"
        className="static-hero-img"
      />

      <div className="static-features-grid" id="features">
        {STATIC_FEATURES.map((item, idx) => (
          <div key={idx} className="static-feature-card">
            <div className="callout-header">
              <div className="callout-accent-bar"></div>
              <span className="callout-badge">{item.badge}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaticFallback;
