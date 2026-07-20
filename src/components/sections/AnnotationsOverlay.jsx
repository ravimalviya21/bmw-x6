import React from 'react';
import { TECHNICAL_ANNOTATIONS } from '../../constant';

const AnnotationsOverlay = () => {
  return (
    <div className="annotations-overlay">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
        {TECHNICAL_ANNOTATIONS.map((item) => (
          <path
            key={`line-${item.id}`}
            className={item.lineClass}
            d={item.linePath}
            strokeDasharray="100"
            strokeDashoffset="100"
          />
        ))}
        {TECHNICAL_ANNOTATIONS.map((item) => (
          <circle
            key={`dot-${item.id}`}
            className={item.dotClass}
            cx={item.dotCx}
            cy={item.dotCy}
            r="0.5"
          />
        ))}
      </svg>

      {TECHNICAL_ANNOTATIONS.map((item) => (
        <div key={`label-${item.id}`} className={item.labelClass} style={item.labelStyle}>
          <div className="annotation-label-title">{item.title}</div>
          <div className="annotation-divider"></div>
          <p className="annotation-description">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AnnotationsOverlay;
