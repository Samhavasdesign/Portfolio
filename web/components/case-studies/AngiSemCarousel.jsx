'use client';

import { useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import { useSwipe } from '../../hooks/useSwipe';

const SLIDES = [
  { src: '/images/work/SEMfullpage-final.png', alt: 'Angi SEM final concept — full page stepped approach mockup', width: 5355, height: 21633 },
];

export default function AngiSemCarousel() {
  const [active, setActive] = useState(0);
  const slideRefs = useRef([]);
  const slideCount = SLIDES.length;

  const goTo = useCallback((index) => {
    const next = ((index % slideCount) + slideCount) % slideCount;
    slideRefs.current.forEach((el, i) => {
      if (el && i !== next) el.scrollTop = 0;
    });
    setActive(next);
  }, [slideCount]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(active - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(active + 1); }
  };

  const { onTouchStart, onTouchEnd } = useSwipe(
    () => goTo(active + 1),
    () => goTo(active - 1),
  );

  return (
    <div
      className="homer-page-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="SEM final concept page mockups"
    >
      <div className="homer-page-carousel__frame">
        <div
          className="homer-page-carousel__track"
          tabIndex={0}
          aria-live="polite"
          onKeyDown={onKeyDown}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {SLIDES.map((slide, i) => (
            <div
              key={slide.src}
              ref={(el) => { slideRefs.current[i] = el; }}
              className="homer-page-carousel__slide"
              aria-hidden={active !== i}
              tabIndex={active === i ? 0 : -1}
              style={{ transform: `translateX(${(i - active) * 100}%)` }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                width={slide.width}
                height={slide.height}
                sizes="(max-width: 768px) 100vw, (max-width: 1400px) calc(100vw - 320px), 1080px"
                quality={95}
                unoptimized
                decoding="async"
                draggable={false}
                className="homer-page-carousel__image"
              />
            </div>
          ))}
        </div>

        {slideCount > 1 && (
          <>
            <button
              type="button"
              className="homer-page-carousel__nav homer-page-carousel__nav--prev"
              onClick={() => goTo(active - 1)}
              aria-label="Previous page mockup"
            >
              <span aria-hidden="true">‹</span>
            </button>

            <button
              type="button"
              className="homer-page-carousel__nav homer-page-carousel__nav--next"
              onClick={() => goTo(active + 1)}
              aria-label="Next page mockup"
            >
              <span aria-hidden="true">›</span>
            </button>
          </>
        )}
      </div>

      {slideCount > 1 && (
        <div className="homer-page-carousel__dots" role="tablist" aria-label="Carousel pages">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              className="homer-page-carousel__dot"
              data-active={active === i}
              onClick={() => goTo(i)}
              aria-label={`Go to mockup ${i + 1} of ${slideCount}`}
              aria-selected={active === i}
            />
          ))}
        </div>
      )}
    </div>
  );
}
