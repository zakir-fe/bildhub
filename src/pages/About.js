import React from 'react'
import Title from '../components/common/Title'
import abg from '../assets/img/bg/page-title-bg.jpg'
import AboutContent from '../components/About'
import Features from '../components/Features'
import Services from '../components/Services'

const About = () => {
  return (
    <>
      <Title bg = {abg}/>
      <AboutContent/>
      <Features/>
      <Services/>
    </>
  )
}

export default About
