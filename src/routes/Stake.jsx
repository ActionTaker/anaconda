import React from 'react'
import { Link } from 'react-router-dom'
import './StakeStyle.css'

const Stake = () => {
  return (
    <div className="stake">
      <div className="roundbox">
        <div className="round">
          <div className="outer">
            <div className="inner">
              <h4>ROUND 4</h4>
            </div>
          </div>
        </div>

        <div className="myround">
          <ul className="myroundl">
            <li className="f">MY ROUND</li>
            <li className="s">4</li>
          </ul>
          <div className="rateapybox">
            <ul className="rate">
              <li className="1">RATE</li>
              <li className="2">1.087%</li>
            </ul>
            <ul className="apy">
              <li className="1">APY</li>
              <li className="2">376%</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="info">
        <h1>TOTAL BALANCE</h1>
        <ul className="balancebox">
          <li className="balance">271247.128</li>
          <li className="percent">(27%)</li>
        </ul>
        <ul className="invested">
          <li className="1">ANCD INVESTED</li>
          <li className="2">$3460.27</li>
        </ul>
        <ul className="earned">
          <li className="1">ANCD EARNED</li>
          <li className="2">$26000.27</li>
        </ul>
      </div>
      <div className="stakebox">
        <ul className="stakeoption">
          <li className="activebtn">STAKE</li>
          <li>UNSTAKE</li>
          <li>REWARD</li>
        </ul>
        <div className="stakesection">
          <ul className="spbt">
            <li className="1">MY ANDC:</li>
            <li className="2">127.27</li>
          </ul>
          <input placeholder="AMOUNT OF ANCD TO STAKE" className="input"></input>
          <div className="btn-round">STAKE</div>
        </div>
  
    
      </div>
    </div>
  )
}
export default Stake