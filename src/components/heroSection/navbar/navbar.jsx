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
          <a href="#heroCont"><li>Home</li></a>
          <a href="#aboutCont"><li>About Us</li></a>
          <a href="#offerCont"><li>What We Offer</li></a>
          <a href="#clientsCont"><li>Our Clients</li></a>
          <a href="#contactCont"><li>Contact Us</li></a>
        </div>

    </div>
  )
}

export default Navbar