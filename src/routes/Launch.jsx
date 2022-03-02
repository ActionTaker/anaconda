import React from 'react'
import './LaunchStyle.css'
import LaunchNav from '../components/LaunchNav'
import Stake from './Stake'
import Bond from './Bond'
import Borrow from './Borrow'
import Deposit from './Deposit'
import { Routes, Route } from 'react-router-dom'

const Launch = () => {
  return (
    <div className="appmain">
      <LaunchNav/>
      <Routes>
          <Route path='Stake' element={<Stake/>} />
          <Route path='Bond' element={<Bond/>} />
          <Route path='Borrow' element={<Borrow/>} />
          <Route path='Deposit' element={<Deposit/>} />
      </Routes>
    </div>
  )
}
export default Launch