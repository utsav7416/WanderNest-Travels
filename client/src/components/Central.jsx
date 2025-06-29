import React, { useState, useEffect } from 'react'
import '../styles/Central.scss'

const Central = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Maldives Paradise',
      brightness: 'dark'
    },
    {
      url: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Swiss Alps',
      brightness: 'light'
    },
    {
      url: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80',
      alt: 'Santorini Greece',
      brightness: 'light'
    },
    {
      url: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73b15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Desert Safari',
      brightness: 'medium'
    }
  ]

  const features = ['EXCELLENCE', 'SUSTAINABLE', 'AUTHENTIC', 'MEMORABLE']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  const handleIndicatorClick = (index) => {
    setCurrentImageIndex(index)
  }

  const currentImage = images[currentImageIndex]

  return (
    <section className="central-container">
      <div className="hero-banner">
        <div className="image-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`background-image ${index === currentImageIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image.url})` }}
            />
          ))}
          <div className="overlay"></div>
        </div>

        <div className={`hero-content ${currentImage.brightness}`}>
          <div className="hero-text">
            <h1 className="main-title">
              THE JOURNEY BEYOND YOUR{' '}
              <span className="highlight">IMAGINATION</span>
            </h1>
          </div>

          <div className="feature-tags">
            {features.map((feature, index) => (
              <span key={index} className="feature-tag">
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="image-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>

        <div className="floating-elements">
          <span className="float-icon" style={{ top: '20%', left: '10%' }}>✈️</span>
          <span className="float-icon" style={{ top: '70%', right: '15%' }}>🏝️</span>
          <span className="float-icon" style={{ bottom: '30%', left: '85%' }}>🗺️</span>
        </div>
      </div>
    </section>
  )
}

export default Central