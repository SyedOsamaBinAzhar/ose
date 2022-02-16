import React from 'react'
import Navbar from '../../components/heroSection/navbar/navbar';
import "./landingPage.css";

const LandingPage = () => {
  return (
    <div className='landingPageContainer'>
        <div className="heroSection">
            <div className="navbarCont"><Navbar/></div>
            <div className="contentCont flex-col">
                <h1>One Step Enterprises</h1>
                <p>Deals in : All kinds of industrail tools, fabrics, garments accessories, CMT manufacturing & general order suppliers .</p>
            </div>
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