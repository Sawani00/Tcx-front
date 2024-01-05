import React from 'react'
import Hero from './Sections/Hero'
import Why from './Sections/Why'
import Faq from './Sections/Faq'
import Navbar from './Sections/Navbar'
import Footer from './Sections/Footer'

function Home() {
  return (
    <div className='font-Gilroy'>
      <Navbar/>
      <Hero/>
      <Why/>
      <Faq/>
      <Footer/>
    </div>
    
  )
}

export default Home