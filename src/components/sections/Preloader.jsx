import React from 'react';
import { AlertCircle } from 'lucide-react';

const Preloader = ({ progress, loadError }) => {
  if (loadError) {
    console.log(">>>> check loadError", loadError);
    return (
      <div className="preloader">
        <AlertCircle size={48} className="quote-icon" style={{ color: '#ff3b30', opacity: 1 }} />
        <div className="loader-logo" style={{ marginTop: '16px', marginBottom: '8px' }}>Asset Load Error</div>
        <div className="loader-text" style={{ maxWidth: '360px', textAlign: 'center' }}>
          Could not load the high-resolution frame sequence. Please verify that the image files exist in the public directory and refresh.
        </div>
      </div>
    );
  }

  return (
    <div className="preloader">
      <div className="loader-logo">X6 SERIES</div>
      <div className="loader-container">
        <div className="loader-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="loader-text">Loading premium assets... {progress}%</div>
    </div>
  );
};

export default Preloader;
