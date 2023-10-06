// CountingAnimation.js
import React, { useState, useEffect } from 'react';
import'./counter.css'

function CountingAnimation({ endValue }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId;

    const incrementCount = () => {
      if (count < endValue) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(intervalId);
      }
    };

    if (count < endValue) {
      intervalId = setInterval(incrementCount, 35); // Adjust the interval (e.g., 200ms for slower counting)
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [count, endValue]);

  return (
    <div className="counting-animation">
      <span className="count container">{count}+</span>
    </div>
  );
}

export default CountingAnimation;
