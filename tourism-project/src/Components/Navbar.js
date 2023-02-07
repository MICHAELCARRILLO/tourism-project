import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

import Dropdown from './Dropdown'

function Navbar() {

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = ()=>{
    setDropdown(true);
  }

  const onMouseLeave = ()=>{
    setDropdown(false);
  }

  return (
    <nav className='navbar'>
        <div className='navbar-container'> 
        <Link to="/" className='navbar-logo' onClick={closeMobileMenu} >
            TRVL <i className='fab fa-typo3'/>
        </Link>
        <div className='menu-icon' onClick={handleClick} >
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'> 
          <Link to='/' className='nav-links' onClick={closeMobileMenu} >
            Home
          </Link>
          </li>
          <li className='nav-item'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          > 
          <div className='nav-links' >
            Destinations &nbsp;<i className='fas fa-caret-down'/>
          </div>
          {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'> 
          <Link to='/about-us' className='nav-links' onClick={closeMobileMenu} >
            About Us
          </Link>
          </li>
          <li className='nav-item'> 
          <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu} >
            Contact Us
          </Link>
          </li>
       
        </ul>

        </div>
    </nav>
  )
}

export default Navbar