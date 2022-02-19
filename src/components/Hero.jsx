import React from 'react'
import { Link } from 'react-router-dom'
import './HeroStyle.css'



const Hero = () => {
  return (
    <>
    <div className='hero'>
      <h1>World's Biggest DEFI</h1>
      <Link to='/Launch/Stake' className='btn'>LAUNCH APP</Link>
    </div>
    <div className='tvl'>
        <h4>Total Value Locked: $124532987</h4>
      </div>
    </>
  )
}

export default Hero