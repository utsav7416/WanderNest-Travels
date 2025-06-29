import React, { useState, useEffect } from 'react';
import '../styles/TravelCarousel.scss';

const TravelCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const travelImages = [
    {
      url: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Tropical Paradise',
      description: 'Discover pristine beaches and crystal-clear waters'
    },
    {
      url: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Mountain Adventures',
      description: 'Experience breathtaking peaks and scenic trails'
    },
    {
      url: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Urban Exploration',
      description: 'Immerse yourself in vibrant city culture'
    },
    {
      url: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Desert Wonders',
      description: 'Journey through endless golden landscapes'
    },
    {
      url: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Forest Retreats',
      description: 'Find peace in nature\'s embrace'
    },
    {
      url: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Coastal Escapes',
      description: 'Relax by the ocean\'s endless horizon'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % travelImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [travelImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % travelImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + travelImages.length) % travelImages.length);
  };

  return (
    <div className="travel-carousel">
      <div className="carousel-container">
        <h2 className="carousel-title">Discover Your Next Adventure</h2>
        <p className="carousel-subtitle">Explore breathtaking destinations around the world</p>
        
        <div className="carousel-wrapper">
          <button className="carousel-btn prev" onClick={prevSlide}>
            &#8249;
          </button>
          
          <div className="carousel-content">
            {travelImages.map((image, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img src={image.url} alt={image.title} />
                <div className="slide-overlay">
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-btn next" onClick={nextSlide}>
            &#8250;
          </button>
        </div>
        
        <div className="carousel-indicators">
          {travelImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelCarousel;