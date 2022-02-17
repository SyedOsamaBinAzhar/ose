import React, { useState, useEffect } from 'react'
import Navbar from '../../components/heroSection/navbar/navbar';
import heroImg from "../../assets/landingPage/heroSection/heroImg.svg"
import whiteCurveImage from "../../assets/landingPage/aboutSection/whiteCurveAsset.svg";
import blueStripOne from "../../assets/landingPage/aboutSection/blueStripOne.svg";
import blueStripTwo from "../../assets/landingPage/aboutSection/blueStripTwo.svg";
import missionImage from "../../assets/landingPage/aboutSection/missionImg.svg";
import visionImage from "../../assets/landingPage/aboutSection/visionImg.svg";
import greenAsset from "../../assets/landingPage/aboutSection/greenAsset.svg";
import ellipseOne from "../../assets/landingPage/offerSection/ellipseOne.svg";
import ellipseTwo from "../../assets/landingPage/offerSection/ellipseTwo.svg";



//card assets
import cardOneImg from "../../assets/landingPage/offerSection/cardOneImg.svg";
import cardTwoImg from "../../assets/landingPage/offerSection/cardTwoImg.svg";
import cardThreeImg from "../../assets/landingPage/offerSection/cardThreeImg.svg";
import cardFourImg from "../../assets/landingPage/offerSection/cardFourImg.svg";
import cardFiveImg from "../../assets/landingPage/offerSection/cardFiveImg.svg";
import cardSixImg from "../../assets/landingPage/offerSection/cardSixImg.svg";
import cardSevenImg from "../../assets/landingPage/offerSection/cardSevenImg.svg";
import cardEightImg from "../../assets/landingPage/offerSection/cardEightImg.svg";
import cardNineImg from "../../assets/landingPage/offerSection/cardNineImg.svg";

//clients assets
import yunusLogo from "../../assets/landingPage/clientsSection/yunus.svg";
import changanLogo from "../../assets/landingPage/clientsSection/changan.svg";
import gulahmedLogo from "../../assets/landingPage/clientsSection/gulahmed.svg";

//Footer assets:
import logoFooter from "../../assets/landingPage/footerSection/logoFooter.svg";

import ImageComponent from '../../components/aboutSection/imageComponent/imageComponent';
import TextComponent from '../../components/aboutSection/textComponent/textComponent';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import "./landingPage.css";
import "./aboutSection.css";
import "./heroSection.css";
import "./whatWeOffer.css";
import "./footerStrip.css";
import "./ourClients.css";
import "./footerSection.css";
import "./mobSideBar.css";


import Card from '../../components/whatWeOfferSection/card/card';
import ClientCard from '../../components/clientsSection/card/clientCard';


const LandingPage = () => {

    const [cardData] = useState([
        {
            index : 1,
            img : cardOneImg,
            txt : "CMT Manufacturing",
        },
        {
            index : 2,
            img : cardTwoImg,
            txt : "Fabric",
        },
        {
            index : 3,
            img : cardThreeImg,
            txt : "Garment Accessories",
        },
        {
            index : 4,
            img : cardFourImg,
            txt : "Industrial Tools",
        },
        {
            index : 5,
            img : cardFiveImg,
            txt : "Security Tags",
        },
        {
            index : 6,
            img : cardSixImg,
            txt : "Clothing Packaging",
        },
        {
            index : 7,
            img : cardSevenImg,
            txt : "Hangtags & Zippers",
        },
        {
            index : 8,
            img : cardEightImg,
            txt : "Buttons",
        },
        {
            index : 9,
            img : cardNineImg,
            txt : "General Order Supplying",
        }
    ]);

    const [clientsLogos] = useState([
        {
            logo : gulahmedLogo
        },
        {
            logo : yunusLogo
        },
        {
            logo : changanLogo
        }
    ])

  const [hamState, setHamState] = useState(false);

  useEffect(() => {
  }, [hamState])
  
  const handleHamStatus = () => {
    setHamState(!hamState);
  }

  return (
    hamState ?
    <div className='mobSideBar'>
          <div className="mobHamLineCont" onClick={handleHamStatus}>
            <div className="mobHamLine1"></div>
            <div className="mobHamLine2"></div>
            <div className="mobHamLine3"></div>
          </div>
          <div className='mobSideBarItemsCont'>
          <a href="#heroCont" onClick={handleHamStatus}><li>Home</li></a>
          <a href="#aboutCont" onClick={handleHamStatus}><li>About Us</li></a>
          <a href="#offerCont" onClick={handleHamStatus}><li>What We Offer</li></a>
          <a href="#clientsCont" onClick={handleHamStatus}><li>Our Clients</li></a>
          <a href="#contactCont"onClick={handleHamStatus}><li>Contact Us</li></a>
          </div>
    </div>
    :
    <div className='landingPageContainer'>
        <div className="heroSection" id="heroCont">
            <div className="navbarCont">
                <Navbar setHamState = {setHamState} hamState = {hamState}/>
            </div>
            <div className="contentCont">
                <h1>One Step Enterprises</h1>
                <div className='heroParas'>
                <p>Deals in : All kinds of industrail tools, fabrics, garments accessories,</p>
                <p>CMT manufacturing & general order suppliers.</p>
                </div>
            </div>
        </div>
        <div className="aboutSection" id = "aboutCont">
            <img src = {whiteCurveImage} className = 'whiteCurveImgStyles' alt=''/>
            <img src = {blueStripOne} className = 'blueStripOneStyles' alt=''/>
            <img src = {blueStripTwo} className = 'blueStripTwoStyles' alt=''/>
            <img src = {greenAsset} className = 'greenAsset' alt=''/>

            <div className="headingRow flex-col">
                <h1>About Us</h1>
                <div className="line"></div>
                <p>Established in 2021, we, One Step Enterprises (OSE), are a modern company, up to date with all the recent equipment and required knowledge of business needs. With us, you get to buy several instruments in one place.</p>
            </div>
            <div className="contentRow">
                <div className="rowOne">
                    <div className="rowOneColOne flex">
                        <ImageComponent image = {missionImage}/>
                    </div>
                    <div className="rowOneColTwo flex">
                        <TextComponent 
                            heading = "Our Mission"
                            text = "Our ultimate mission? Client's growth, convenience, and satisfaction. All this is not possible without excellence in our service and the quality of our product. Therefore, we are constantly striving to provide the best of the best. With our promptness and efficiency, we seek to improve our own business and our client's."
                        />
                    </div>
                </div>
                <div className="rowTwo">
                    <div className="rowTwoColOne flex">
                        <TextComponent
                            heading = "Our Vision"
                            text = "We see ourselves supplying newer products with time and creating sincere and sturdy partnerships in the future. It is our vision to be the ideal partner when it comes to supplying products for relevant services."
                        />
                    </div>
                    <div className="rowTwoColTwo flex">
                        <ImageComponent image = {visionImage}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="whatWeOfferSection" id = "offerCont">
            <img src = {ellipseOne} className = 'ellipseOne' alt=''/>
            <img src = {ellipseTwo} className = 'ellipseTwo' alt=''/>

            <div className="whatWeOfferHeader flex-col">
                <h1>What We Offer</h1>
                <div className="line"></div>
                <p>One Step Enterprises provides top-notch and latest industrial tools to fulfill your technical needs and give you maximum industrial growth. We do not just reside in your factory because we do not believe in limiting ourselves. Understanding the need for variety, we also deal with various high-quality fabric and garment accessories like different types of security tags, clothing packaging, hangtags, buttons, zippers, and General order suppliers. We also specialize in CMT manufacturing knowing how important it is to be a one-stop shop for the convenience of our clients, which is our priority.</p>
            </div>
            <div className="whatWeOfferContentContainer">
                {
                    cardData.map((card) => <Card data = {card} key={card.index}/>)
                }
                

            </div>
        </div>
        <div className="clientsSection" id = "clientsCont">
            <div className="ourClientsHeader flex-col">
                <h1>Our Clients</h1>
                <div className="line"></div>
            </div>
            <div className="ourClientsContent">
                {
                    clientsLogos.map((logo) => <ClientCard key = {logo.logo} logo = {logo}/>)
                }
            </div>
        </div>
        <div className="footerSection" id = "contactCont">
                <div className="footerContent">
                    <div className='footerCard'><img src = {logoFooter} alt = ''/></div>
                    <div className='footerCard'>
                        <div className="footerCardDetails">
                            <h4>Contact:</h4>
                            <p>+92 3003333791</p>
                        </div>
                    </div>
                    <div className='footerCard'>
                        <div className="footerCardDetails">
                            <h4>Email:</h4>
                            <p>enterprises.ose@gmail.com</p>
                        </div>
                    </div>
                    <div className='footerCard'>
                        <div className="footerCardDetails">
                            <h4>Address:</h4>
                            <p>B123 Block J N.Nazimabad, Block 22222222222</p>
                        </div>
                    </div>
                    <div className='footerCard'>
                        <div className="footerCardDetails">
                            <h4>Socials:</h4>
                            <div><LinkedInIcon style = {{fontSize : "35px", cursor : 'pointer'}}/></div>
                        </div>
                        
                    </div>
                </div>
        </div>
        <div className="footerStrip flex"><h3>One Step Enterprises 2022. All rights reserved.</h3></div>
    </div>
  )
}

export default LandingPage