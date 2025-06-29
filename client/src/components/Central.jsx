import React from 'react'
import '../styles/Central.scss'

const Central = () => {
  return (
    <div className="central-hero">
      <div className="hero-image">
        <img 
          src="https://www.mensjournal.com/.image/t_share/MjEwNTQxODIwNjgwMDg3NTI5/best-aurora-borealis-viewing-promo_tromso-norway_juan-maria-coy-vergara-getty.jpg" 
          alt="1" 
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
