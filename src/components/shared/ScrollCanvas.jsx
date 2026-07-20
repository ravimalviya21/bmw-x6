import React, { useRef } from 'react';
import useScrollCanvas from '../../hooks/useScrollCanvas';

import Preloader from '../sections/Preloader';
import HeroOverlay from '../sections/HeroOverlay';
import FeatureCallouts from '../sections/FeatureCallouts';
import AnnotationsOverlay from '../sections/AnnotationsOverlay';
import StaticFallback from '../sections/StaticFallback';

const ScrollCanvas = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const {
    loading,
    progress,
    loadError,
    prefersReducedMotion,
    handleScrollToBooking
  } = useScrollCanvas(containerRef, canvasRef);

  if (loading || loadError) {
    return <Preloader progress={progress} loadError={loadError} />;
  }

  if (prefersReducedMotion) {
    return <StaticFallback onScrollToBooking={handleScrollToBooking} />;
  }

  return (
    <div ref={containerRef} className="scroll-container" id="overview">
      <div className="scroll-pin-wrapper">
        <div className="canvas-container">
          <canvas ref={canvasRef} className="canvas-sequence" />
          <AnnotationsOverlay />
        </div>

        <HeroOverlay onScrollToBooking={handleScrollToBooking} />
        <FeatureCallouts />
      </div>
    </div>
  );
};

export default ScrollCanvas;
