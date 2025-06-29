import React from 'react'
import '../styles/Central.scss'

const Central = () => {
  return (
    <div className="central-hero">
      <div className="hero-image">
        <img 
          src="https://cdn.dribbble.com/userupload/11975763/file/original-f88e13063da0bda932d42e71ba58d5d5.png?resize=752x&vertical=center" 
          alt="Travel Journey" 
        />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          THE JOURNEY BEYOND YOUR <span className="highlight">IMAGINATION</span>
        </h1>
        <div className="hero-tags">
          <span className="tag">EXCELLENCE</span>
          <span className="tag">SUSTAINABLE</span>
          <span className="tag">AUTHENTIC</span>
          <span className="tag">MEMORABLE</span>
        </div>
      </div>
    </div>
  )
}

export default Central
