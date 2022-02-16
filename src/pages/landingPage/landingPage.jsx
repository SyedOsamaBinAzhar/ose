import React from 'react'
import Navbar from '../../components/heroSection/navbar/navbar';
import "./landingPage.css";
import "./aboutSection.css";
import "./heroSection.css";

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
        <div className="aboutSection">
            <div className="headingRow flex-col">
                <h1>About Us</h1>
                <div className="line"></div>
                <p>Established in 2021, we, One Step Enterprises (OSE), are a modern company, up to date with all the recent equipment and required knowledge of business needs. With us, you get to buy several instruments in one place.</p>
            </div>
            <div className="contentRow"></div>
        </div>
        <div className="whatWeOfferSection">whatWeOfferSection</div>
        <div className="clientsSection">clientsSection</div>
        <div className="footerSection">footerSection</div>
        <div className="footerStrip">footerStrip</div>
    </div>
  )
}

export default LandingPage