import React from 'react'
import useState from 'react-hook-use-state'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyle.css'

const Navbar = () => {
  const[click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
    return (
        <div className='navbar'>
          <Link to='/'><h1>ANACONDA</h1></Link>
          <ul className={click?'nav-menu active' : 'nav-menu'}>
            <li>
              <Link to='/'>TELEGRAM</Link>
            </li>
            <li>
              <Link to='/'>DOCS</Link>
            </li>
            <li>
              <Link to='/Launch/Stake'>LAUNCH APP</Link>
            </li>
          </ul>
          <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}
               
           </div>
        </div>
    )
}
export default Navbar