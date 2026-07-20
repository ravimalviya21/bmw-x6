import React from 'react';
import { FEATURE_CALLOUTS } from '../../constant';

const FeatureCallouts = () => {
  return (
    <div className="callouts-container" id="features">
      {FEATURE_CALLOUTS.map((item) => (
        <div key={item.id} className={`callout-box ${item.className}`}>
          <div className="callout-header">
            <div className="callout-accent-bar"></div>
            <span className="callout-badge">{item.badge}</span>
          </div>
          <h2 className="callout-title">{item.title}</h2>
          <p className="callout-description">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCallouts;
