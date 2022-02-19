import React from 'react'
import { Link } from 'react-router-dom'
import './LaunchNavStyle.css'
import useState from 'react-hook-use-state'


const LaunchNav = () => {
  const [menu, setMenu] = useState("stake")
  return (
    <div>
    <div className='navbar'>
      <Link to='/'><h1>ANCD</h1></Link>
      <span className="btn">CONNECT WALLET</span>
    </div>
    <div>
      <ul className='selection'>
            <li className={menu == "stake" &&'active'}>
              <Link to='/Launch/Stake' onClick={() => setMenu("stake")}>STAKE</Link>
            </li>
            <li className={menu == "bond" &&'active'}>
              <Link to='/Launch/Bond' onClick={() => setMenu("bond")}>BOND</Link>
            </li>
            <li className={menu == "borrow" &&'active'}>
              <Link to='/Launch/Borrow' onClick={() => setMenu("borrow")}>BORROW</Link>
            </li>
            <li className={menu == "deposit" &&'active'}>
              <Link to='/Launch/Deposit' onClick={() => setMenu("deposit")}>DEPOSIT</Link>
            </li>
          </ul>
    </div>
    </div>
  )
}

export default LaunchNav