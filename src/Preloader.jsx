import React, { useState, useEffect } from 'react';
import { preLoaderAnim } from "./Gsap";
import './Preloader.css'
const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    preLoaderAnim();
    setTimeout(() => {
      setIsLoaded(true); // Set to true after animation duration
    }, 3000); // Make sure the timeout matches the duration of your preloader animation
  }, []);

  if (isLoaded) return null; // Remove the preloader after animation

  return (
    <div className="preloader">
      <div className="text-container">
        <span>Developer</span>
        <span>Designer</span>
        <span>Creator</span>
      </div>
    </div>
  );
}

export default Preloader;
