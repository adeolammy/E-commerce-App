import React from 'react'
import Announcement from '../components/Announcement'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div>
      <Announcement/>
      <NavBar/>
      <Slider/>
      <Categories/>
      <Products/>
      <NewsLetter/>

    </div>
  )
}

export default Home
