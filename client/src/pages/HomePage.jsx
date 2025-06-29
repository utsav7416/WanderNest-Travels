import React from 'react'
import  Navbar  from '../components/Navbar'
import  Slide  from '../components/Slide'
import Categories from '../components/Categories'
import TravelCarousel from '../components/TravelCarousel'
import Listings from '../components/Listings'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Slide />
      <Categories />
      <TravelCarousel />
      <Listings />
      <Footer />
    </div>
  )
}

export default HomePage