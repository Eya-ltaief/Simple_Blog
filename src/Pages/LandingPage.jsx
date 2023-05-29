import React from 'react'
import Header from "../components/Header"
import Headline from '../components/Headline'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import NewsCarousel from '../components/NewsCarousel'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div>
        <Header />
        <Headline/>
        <Hero/>
        <Posts/>
        <NewsCarousel/>
        <Footer/>
    </div>
  )
}

export default LandingPage