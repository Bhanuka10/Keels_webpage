import React, { useState, useEffect } from 'react'
import './Poster.css'

const Poster = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      title: "Premium Quality",
      description: "Experience the finest products handpicked for exceptional quality and value.",
      icon: "✨"
    },
    {
      title: "Exclusive Deals",
      description: "Access special offers and promotions available only to our loyal customers.",
      icon: "🏷️"
    },
    {
      title: "Fast Delivery",
      description: "Get your favorite products delivered to your doorstep in record time.",
      icon: "🚚"
    }
  ];
  
  useEffect(() => {
    // Trigger animation on component mount
    setIsVisible(true);
    
    // Cycle through features
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={`poster ${isVisible ? 'visible' : ''}`}>
      <div className="poster-glow"></div>
      
      <div className="poster-image-container">
        <img 
          src="https://img.freepik.com/premium-vector/lap-letter-logo-design-technology-company-lap-logo-design-black-white-color-combination-lap-logo-lap-vector-lap-design-lap-icon-lap-alphabet-lap-typography-logo-design_229120-161809.jpg" 
          alt="Poster" 
          className="poster-image" 
        />
        <div className="image-overlay"></div>
      </div>
      
      <div className="poster-content">
        <div className="feature-icon">{features[activeFeature].icon}</div>
        <h2 className="poster-title">{features[activeFeature].title}</h2>
        <p className="poster-description">{features[activeFeature].description}</p>
        <button className="poster-cta">Explore Now</button>
      </div>
    </div>
  )
}

export default Poster