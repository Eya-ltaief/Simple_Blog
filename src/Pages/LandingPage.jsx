import React from 'react'
import Header from "../components/LandingPageComp/Header"
import Headline from '../components/LandingPageComp/Headline'
import Hero from '../components/LandingPageComp/Hero'
import Posts from '../components/LandingPageComp/Posts'
import NewsCarousel from '../components/LandingPageComp/NewsCarousel'
import Footer from '../components/LandingPageComp/Footer'

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