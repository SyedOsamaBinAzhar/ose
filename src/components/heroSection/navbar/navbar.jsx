import React from 'react'
import "./navbar.css";
import logo from "../../../assets/landingPage/heroSection/logoNav.svg";

const Navbar = () => {
  return (
    <div className='navbarCont'>
        <div className="logoCont">
            <img src= {logo} alt = ''/>
        </div>
        <div className="navItemsCont">
          <li>Home</li>
          <li>About Us</li>
          <li>What We Offer</li>
          <li>Our Clients</li>
          <li>Contact Us</li>
        </div>

    </div>
  )
}

export default Navbar