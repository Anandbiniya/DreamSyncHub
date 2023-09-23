import React, { useState, useEffect } from 'react';
import './core.css';

function Core() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      name: 'John Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.',
    },
    {
      name: 'Jane Smith',
      description: 'Consectetur adipisicing elit. Tempore, recusandae.',
    },
    {
      name: 'Alice Johnson',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, doloribus.',
    },
    {
      name: 'Bob Johnson',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, doloribus.',
    },
    {
      name: 'Emily Davis',
      description: 'Consectetur adipisicing elit. Tempore, recusandae.',
    },
    {
      name: 'Michael Smith',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  return (
    <div className="card-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`card medium ${currentSlide === index ? 'active' : ''}`}
        >
          <div className="profile-card">
            <div className="profile-info">
              <h2 className="profile-name">{slide.name}</h2>
              <p className="profile-description">{slide.description}</p>
              <button className="button">Know More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Core;
