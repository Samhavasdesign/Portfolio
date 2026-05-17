'use client';

import { useCallback, useRef, useState } from 'react';
import Image from 'next/image';

const SLIDES = [
  { src: '/images/work/homerwebsiteimage1.webp', alt: 'HOMER Careers page — desktop and mobile mockups', width: 1115, height: 4544 },
  { src: '/images/work/homerwebsiteimage3.webp', alt: 'HOMER learning journey page — desktop and mobile mockups', width: 1115, height: 4641 },
  { src: '/images/work/homerwebsiteimage4.webp', alt: 'HOMER About page — desktop and mobile mockups', width: 1115, height: 4298 },
  { src: '/images/work/homerwebsiteimage5.webp', alt: 'HOMER ages 2–8 program page — desktop and mobile mockups', width: 1115, height: 4791 },
  { src: '/images/work/homerwebsiteimage6.webp', alt: 'HOMER Method overview page — desktop and mobile mockups', width: 1115, height: 4568 },
  { src: '/images/work/homerwebsiteimage7.webp', alt: 'HOMER Learn and Grow page — desktop and mobile mockups', width: 1115, height: 3007 },
  { src: '/images/work/homerwebsiteimage8.webp', alt: 'HOMER Learn and Grow landing page — desktop and mobile mockups', width: 1115, height: 4096 },
];

export default function HomerPageCarousel() {
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

  return (
    <div
      className="homer-page-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Full page website mockups"
    >
      <div className="homer-page-carousel__frame">
        <div
          className="homer-page-carousel__track"
          tabIndex={0}
          aria-live="polite"
          onKeyDown={onKeyDown}
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
      </div>

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
    </div>
  );
}
