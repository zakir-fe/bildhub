import React from 'react'
import Slider from '../components/Slider'
import About from '../components/About'
import Services from '../components/Services'
import Project from '../components/Project'
import Brands from '../components/Brands'
import Features from '../components/Features'
import Testimonial from '../components/Testimonial'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Blogs from '../components/Blogs'

const Home = () => {
  return (
    <>
        <Slider/>
        <About/>
        <Services/>
        <Project/>
        <Brands/>
        <Features/>
        <Testimonial/>
        <Team/>
        <Contact/>
        <Blogs/>
    </>
  )
}

export default Home
