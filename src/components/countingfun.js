import React, { useState, useEffect, useRef } from 'react';
import './counter.css';

function CountingAnimation({ endValue }) {
  const [count, setCount] = useState(0);
  const countingRef = useRef(null);
  const intersectionObserverRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
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
              observer.unobserve(entry.target); // Use the target from the entry
            }
          };

          const countingInterval = setInterval(incrementCount, 35);

          return () => {
            clearInterval(countingInterval);
          };
        }
      });
    };

    intersectionObserverRef.current = new IntersectionObserver(handleIntersection, options);

    if (countingRef.current) {
      intersectionObserverRef.current.observe(countingRef.current);
    }

    return () => {
      if (countingRef.current && intersectionObserverRef.current) {
        intersectionObserverRef.current.disconnect(); // Disconnect the observer
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
