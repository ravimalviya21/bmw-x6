import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TOTAL_FRAMES } from '../constant';
import { getBatchS3PresignedUrls } from '../config/s3';

gsap.registerPlugin(ScrollTrigger);

const useScrollCanvas = (containerRef, canvasRef) => {
  const activeFrameRef = useRef(0);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    console.log(">>>> check mediaQuery", mediaQuery);
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setLoading(false);
      return;
    }

    let loadedCount = 0;
    const loadedImages = [];
    let isMounted = true;

    const handleImageLoad = () => {
      if (!isMounted) return;
      loadedCount++;
      const currentProgress = Math.round((loadedCount / TOTAL_FRAMES) * 100);
      setProgress(currentProgress);

      if (loadedCount === TOTAL_FRAMES) {
        setImages(loadedImages);
        setLoading(false);
      }
    };

    const handleImageError = (err) => {
      console.error("Failed to load image frame", err);
      if (isMounted) {
        setLoadError(true);
        setLoading(false);
      }
    };

    getBatchS3PresignedUrls(TOTAL_FRAMES)
      .then((signedUrls) => {
        if (!isMounted) return;
        signedUrls.forEach((url) => {
          const img = new Image();
          img.src = url;
          img.onload = handleImageLoad;
          img.onerror = handleImageError;
          loadedImages.push(img);
        });
      })
      .catch((err) => {
        console.error("Failed to generate S3 presigned URLs", err);
        if (isMounted) {
          setLoadError(true);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [prefersReducedMotion]);

  const drawFrame = useCallback((index) => {
    const canvas = canvasRef.current;
    if (!canvas || !images[index]) return;

    const ctx = canvas.getContext('2d');
    const img = images[index];

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();

    const newWidth = Math.round(rect.width * dpr);
    const newHeight = Math.round(rect.height * dpr);

    if (canvas.width !== newWidth || canvas.height !== newHeight) {
      canvas.width = newWidth;
      canvas.height = newHeight;
    }

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio) * 1.08;

    const w = img.width * ratio;
    const h = img.height * ratio;

    let xShift = 0;
    if (window.innerWidth > 768) {
      xShift = canvas.width * 0.035;
    }

    const x = ((canvas.width - w) / 2) + xShift;
    const y = (canvas.height - h) / 2;

    ctx.drawImage(img, 0, 0, img.width, img.height, x, y, w, h);
  }, [canvasRef, images]);

  useEffect(() => {
    if (loading || prefersReducedMotion || images.length === 0) return;

    drawFrame(0);

    const handleResize = () => {
      drawFrame(activeFrameRef.current);
    };
    window.addEventListener('resize', handleResize);

    const frameObj = { frame: 0 };

    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=870%',
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const indicator = document.querySelector('.scroll-indicator');
          if (indicator) {
            indicator.style.opacity = self.progress > 0.01 ? '0' : '1';
          }
        }
      }
    });

    mainTimeline.to(frameObj, {
      frame: TOTAL_FRAMES - 1,
      ease: 'none',
      duration: TOTAL_FRAMES,
      onUpdate: () => {
        const frameIndex = Math.round(frameObj.frame);
        if (frameIndex !== activeFrameRef.current) {
          activeFrameRef.current = frameIndex;
          drawFrame(frameIndex);
        }
      }
    }, 0);

    mainTimeline.fromTo('.callout-1',
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, ease: 'power2.out', duration: 12 },
      48
    );
    mainTimeline.to('.callout-1',
      { opacity: 0, x: 30, ease: 'power2.in', duration: 12 },
      76
    );

    mainTimeline.fromTo('.callout-2',
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, ease: 'power2.out', duration: 12 },
      88
    );
    mainTimeline.to('.callout-2',
      { opacity: 0, x: 30, ease: 'power2.in', duration: 12 },
      112
    );

    mainTimeline.fromTo('.callout-3',
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, ease: 'power2.out', duration: 12 },
      124
    );
    mainTimeline.to('.callout-3',
      { opacity: 0, x: 30, ease: 'power2.in', duration: 12 },
      146
    );

    mainTimeline.fromTo('.callout-4',
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, ease: 'power2.out', duration: 12 },
      154
    );
    mainTimeline.to('.callout-4',
      { opacity: 0, x: 30, ease: 'power2.in', duration: 12 },
      176
    );

    mainTimeline.fromTo('.callout-5',
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, ease: 'power2.out', duration: 12 },
      186
    );

    mainTimeline.fromTo('.annotation-dot-1',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, transformOrigin: 'center', ease: 'back.out(1.5)', duration: 4 },
      188
    );
    mainTimeline.fromTo('.annotation-dot-2',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, transformOrigin: 'center', ease: 'back.out(1.5)', duration: 4 },
      189
    );

    mainTimeline.fromTo('.annotation-line-1',
      { strokeDashoffset: 100 },
      { strokeDashoffset: 0, ease: 'power1.inOut', duration: 8 },
      192
    );
    mainTimeline.fromTo('.annotation-line-2',
      { strokeDashoffset: 100 },
      { strokeDashoffset: 0, ease: 'power1.inOut', duration: 8 },
      193
    );

    mainTimeline.fromTo('.annotation-label-1',
      { opacity: 0, x: -15 },
      { opacity: 1, x: 0, ease: 'power2.out', duration: 6 },
      198
    );
    mainTimeline.fromTo('.annotation-label-2',
      { opacity: 0, x: -15 },
      { opacity: 1, x: 0, ease: 'power2.out', duration: 6 },
      200
    );

    mainTimeline.to('.callout-5',
      { opacity: 0, x: 30, ease: 'power2.in', duration: 12 },
      208
    );

    mainTimeline.to(['.annotation-dot-1', '.annotation-dot-2', '.annotation-line-1', '.annotation-line-2', '.annotation-label-1', '.annotation-label-2'], {
      opacity: 0,
      ease: 'power2.in',
      duration: 12
    }, 208);

    mainTimeline.fromTo('.callout-6',
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, ease: 'power2.out', duration: 12 },
      218
    );

    mainTimeline.to('.hero-overlay', {
      '--hero-blur': '0px',
      '--hero-opacity': 0.0,
      opacity: 0,
      y: -40,
      ease: 'power2.out',
      duration: 40
    }, 10);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mainTimeline.scrollTrigger) mainTimeline.scrollTrigger.kill();
      mainTimeline.kill();
    };
  }, [containerRef, loading, prefersReducedMotion, images, drawFrame]);

  const handleScrollToBooking = (e) => {
    e.preventDefault();
    const element = document.getElementById('book-now');
    if (element) {
      const headerOffset = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return {
    loading,
    progress,
    loadError,
    prefersReducedMotion,
    handleScrollToBooking
  };
};

export default useScrollCanvas;
