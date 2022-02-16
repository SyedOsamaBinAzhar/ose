import React from 'react'
import Navbar from '../../components/heroSection/navbar';
import "./landingPage.css";

const LandingPage = () => {
  return (
    <div className='landingPageContainer'>
        <div className="heroSection">
            <div className="navbarCont"><Navbar/></div>
            <div className="contentCont">contentCont</div>
        </div>
        <div className="aboutSection">ABOUT</div>
        <div className="whatWeOfferSection">whatWeOfferSection</div>
        <div className="clientsSection">clientsSection</div>
        <div className="footerSection">footerSection</div>
        <div className="footerStrip">footerStrip</div>
    </div>
  )
}

export default LandingPage