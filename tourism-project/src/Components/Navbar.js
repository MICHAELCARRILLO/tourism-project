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
    if (dropdown){
      setDropdown(false);
    }
    else{
      setDropdown(true);
    }
  }
  const onMouseLeft = ()=>{
    setDropdown(false);
  }

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80){
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <nav className= {navbar ? 'navbar active' : 'navbar'} >
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
          onClick={onMouseEnter}
          onMouseLeave={onMouseLeft}
          > 
          <div className='nav-links' >
            Destinations &nbsp;<i className='fas fa-caret-down'/>
          </div>
          {dropdown && <Dropdown  closeMobileMenu={closeMobileMenu} />}
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