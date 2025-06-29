import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Slide from '../components/Slide'
import Categories from '../components/Categories'
import Central from '../components/Central'
import Listings from '../components/Listings'
import Footer from '../components/Footer'

const HomePage = () => {
  const [isListingsLoaded, setIsListingsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsListingsLoaded(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <Navbar />
      <Slide />
      <Categories />
      <Central />
      {!isListingsLoaded && (
        <div style={{
          padding: '40px 20px',
          textAlign: 'center',
          color: '#000',
          fontSize: '18px',
          fontWeight: '500',
          backgroundColor: '#f9f9f9',
          borderTop: '1px solid #e0e0e0',
          borderBottom: '1px solid #e0e0e0'
        }}>
          Please wait... Your patience is greatly appreciated.
        </div>
      )}
      {isListingsLoaded && <Listings />}
      <Footer />
    </div>
  )
}

export default HomePage
