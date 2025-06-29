import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Slide from '../components/Slide'
import Categories from '../components/Categories'
import Central from '../components/Central'
import Listings from '../components/Listings'
import Footer from '../components/Footer'

const HomePage = () => {
  const [isListingsLoaded, setIsListingsLoaded] = useState(false)

  return (
    <div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <Navbar />
      <Slide />
      <Categories />
      <Central />
      {!isListingsLoaded && (
        <div style={{ 
          textAlign: 'center', 
          padding: '60px 20px', 
          backgroundColor: '#f8f9fa',
          border: '2px solid #dee2e6',
          margin: '30px auto',
          borderRadius: '12px',
          color: '#000',
          maxWidth: '600px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          fontSize: '18px',
          fontWeight: '500',
          minHeight: '120px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div>
            <p style={{ margin: '0 0 10px 0' }}>
              Please wait... Your patience is greatly appreciated while we load the best listings for you
            </p>
            <div style={{
              width: '40px',
              height: '40px',
              border: '4px solid #f3f3f3',
              borderTop: '4px solid #007bff',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '20px auto 0'
            }}></div>
          </div>
        </div>
      )}
      <Listings onLoaded={() => setIsListingsLoaded(true)} />
      <Footer />
    </div>
  )
}

export default HomePage
