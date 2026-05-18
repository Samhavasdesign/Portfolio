import { useRef } from 'react';

export function useSwipe(onSwipeLeft, onSwipeRight, threshold = 40) {
  const startX = useRef(null);

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (startX.current === null) return;
    const delta = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) >= threshold) {
      if (delta > 0) onSwipeLeft();
      else onSwipeRight();
    }
    startX.current = null;
  };

  return { onTouchStart, onTouchEnd };
}
