import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBucket } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import '../style/navBar.css';

function NavBar() {
  const bucketState = useSelector((state) => state.bucketReducer);

  // State to track whether the navbar should be sticky
  const [isSticky, setIsSticky] = useState(false);

  // Effect to handle scroll events and update the isSticky state
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      // Check if the user has scrolled 1vh down
      setIsSticky(scrollY > window.innerHeight * 0.06);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id="navBarId" className={isSticky ? 'sticky' : ''}>
      <div id="logoId" className="logo">
        <Link className="link-div" to="/">
          <img src="https://github.com/ravi-gangwar/greenEarth/blob/main/frontend/src/assets/green-earth.png?raw=true" alt="" />
        </Link>
      </div>
      <ul>
        <Link className="link-div" to="/">
          <li>Home</li>
        </Link>
        <Link className="link-div" to="/garden">
          <li>Garden</li>
        </Link>
        <Link className="link-div" to="/contact">
          <li>Contact</li>
        </Link>
        <Link className="link-div" to="/about">
          <li>About Us</li>
        </Link>
      </ul>
      <div className="navBar-btns">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
        <Link to="bucket">
          <button className="bucket-btn">
            <FaBucket className="bucket" />
            <span>{bucketState.bucketItems.length}</span>
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
