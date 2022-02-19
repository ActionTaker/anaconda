import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import './HomeStyle.css'

const Home = () => {
  return (
    <div>
      <section className="header">
        <Navbar />
        <Hero />
      </section>
        <About />
    </div>
  )
}

export default Home