import React from 'react'
import { Link } from 'react-router-dom'
import './HeroStyle.css'



const Hero = () => {
  return (
    <>
    <div className='hero'>
      <h1>Anaconda Finance</h1>
      <h2>The decentralized reserve currency protocol on the Klaytn.</h2>
      <Link to='/Launch/Stake' className='btn'>LAUNCH APP</Link>
    </div>
    <div className='tvl'>
        <h4>Total Value Locked: $124,532,987</h4>
      <h4> Current APY: 120,422,123%</h4>
      <h4> Treasury Balance: $123,422,123</h4>
      </div>
    </>
  )
}

export default Hero