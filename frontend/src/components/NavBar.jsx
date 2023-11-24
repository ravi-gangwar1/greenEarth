import React from 'react'
import { Link } from 'react-router-dom'
import { FaBucket } from "react-icons/fa6";
import '../style/navBar.css'

function NavBar() {
  return (
    <nav id='navBarId'>
      <div id="logoId" className="logo">
      <Link className="link-div" to='/home'>
        <img src="/green-earth.png" alt="" />
      </Link>

      </div>
        <ul>
            
            <Link className="link-div" to='/home'><li>Home</li></Link>
            <Link className="link-div" to='/garden'><li>Garden</li></Link>
            <Link className="link-div" to='/contact'><li>Contact</li></Link>
            <Link className="link-div" to='/about'><li>About Us</li>  </Link>            
        </ul>
      <div className='navBar-btns'>
        <button className='login-btn'>Login</button>
        <button className='bucket-btn'><FaBucket className='bucket'/><span>0</span></button>
      </div>
    </nav>
  )
}

export default NavBar
