import React from 'react'
import  Navbar  from '../components/Navbar'
import  Slide  from '../components/Slide'
import Categories from '../components/Categories'
import Listings from '../components/Listings'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Slide />
      <Categories />
      <Listings />
      <Footer />
    </div>
  )
}

export default HomePage