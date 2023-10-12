import React, { useState, useEffect, useRef } from 'react';
import './counter.css';

function CountingAnimation({ endValue }) {
  const [count, setCount] = useState(0);
  const countingRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // Margin around the root (no margin)
      threshold: 0.5, // Intersection ratio to trigger the callback
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let currentCount = 0;

          const incrementCount = () => {
            if (currentCount <= endValue) {
              setCount(currentCount);
              currentCount += 1;
            } else {
              observer.unobserve(countingRef.current);
            }
          };

          const countingInterval = setInterval(incrementCount, 35); // Adjust the interval (e.g., 200ms for slower counting)

          return () => {
            clearInterval(countingInterval);
          };
        }
      });
    };

    const intersectionObserver = new IntersectionObserver(handleIntersection, options);

    if (countingRef.current) {
      intersectionObserver.observe(countingRef.current);
    }

    return () => {
      if (countingRef.current) {
        intersectionObserver.unobserve(countingRef.current);
      }
    };
  }, [endValue]);

  return (
    <div ref={countingRef} className="counting-animation">
      <span className="count container">{count}+</span>
    </div>
  );
}

export default CountingAnimation;
