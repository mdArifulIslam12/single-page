
import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import headerImg from "../../../assets/home.png";
import shapred from "../../../assets/shared.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookSquare,faInstagramSquare,faTwitter} from '@fortawesome/free-brands-svg-icons'

import "./Header.css";

const Header = () => {

  return (
    <div className="header" id="home">
      <div className="container ">
        <div className="row py-5 home-header d-flex justify-content-between">
          <div className="col-lg-6 text-white text-center pt-5  header-details">
            <div className="header-icon">
            
                <a href=""><FontAwesomeIcon icon={faFacebookSquare} /></a>
                <a href=""><FontAwesomeIcon icon={faInstagramSquare} /></a>
                <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
            <h2 className="header-title">Hello, I'M <span>Arif</span></h2>
            <h2 className="text-center">
              <TypeWriterEffect
                textStyle={{
                  fontFamily: " 'Roboto', sans-serif;",
                  color: "white",
                  fontWeight: 500,
                  fontSize: "1.5em",
                  textAlign:"center"
                }}
                startDelay={2000}
                cursorColor="#fff"
                multiText={["Graphic Designer"]}
                multiTextLoop={true}
                multiTextDelay={500}
                typeSpeed={200}
              />
            </h2>
            <p>Graphic designers develop visual concepts by hand or with computer software etc</p>
            <button className="btn header-button mt-4"><a href="#"><span>Hire Me</span></a></button>
          </div>
          <div className="col-lg-5 ">
            <div className="header-img mx-auto">
              <img src={headerImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="shapred">
        <img src={shapred} className="w-100" alt="" />
      </div>
    </div>
  );
};

export default Header;
