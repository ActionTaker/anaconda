import React from 'react'
import { Link } from 'react-router-dom'
import './AboutStyle.css'



const About = () => {
  return (
    <div className="about">
      <h1>Introducing Anaconda Finance</h1>
      <p>Defi 2.0 project, building a community-owned decentralized financial system determined by community members.</p>
        <div className="row">
          <div className="card">
            <h1>Sustainable Staking APY</h1>
            <p>Existing Defi projects have supplied unstable interest rates due to users supplying liquidity. We introduce bonding-system to provide sustainable APY to users.</p>
          </div>
          <div className="card">
            <h1>DAO</h1>
            <p>Anaconda finance is a decentralized autonomous organization building a community-owned decentralized financial infrastructure. All members can present their opinions for project development through Dao Governance, and all decisions are made transparently through voting.</p>
          </div>
          <div className="card">
            <h1>ZAP</h1>
            <p>Swap any asset into bonding assets of Anaconda Finance with ZAP to reduce complexity that saves you time while making gas fees more transparent and efficient. </p>
          </div>
        </div>
    </div>
  )
}

export default About