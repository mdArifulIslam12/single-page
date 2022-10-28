import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookSquare,faInstagramSquare,faTwitter,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
  return (
    <div className="footers">
      <div className="container-fluid pb-0 mb-0 justify-content-center text-light ">
        <footer>
          <div className="row my-5 justify-content-center py-5">
            <div className="col-lg-11">
              <div className="row ">
                <div className=" col-md-4 col-sm-4 col-lg-6  my-auto mx-auto a">
                  <h3 className="text-muted mb-md-0 mb-5 bold-text">Md Arif</h3>
                </div>
                <div className="col-md-4 col-sm-4 col-lg-3">
                  <h6 className="mb-3 mb-lg-4 bold-text ">
                    <b>MENU</b>
                  </h6>
                  <ul className="list-unstyled">
                    <li>Home</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Portfolio</li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 ">
                  <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5">
                    <b>ADDRESS</b>
                  </h6>
                  <p className="mb-1">Bangladesh,Cumilla</p>
                </div>
              </div>
              <div className="row ">
                <div className="col-xl-8 col-md-4 col-sm-4 col-auto  my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                  <p className="social text-muted mb-0 pb-0 bold-text">
                    {" "}
                    <span className="mx-2">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                    </span>{" "}
                    <span className="mx-2">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </span>{" "}
                    <span className="mx-2">
                    <FontAwesomeIcon icon={faTwitter} />
                    </span>{" "}
                    <span className="mx-2">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                    </span>{" "}
                  </p>
                  <small className="rights">
                    <span>&#174;</span> {year} Md Arif. All Rights Reserved.
                  </small>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                  <h6 className="mt-55 mt-2 text-muted bold-text uppercase">
                    <b>Md Arif</b>
                  </h6>
                  <small>
                    {" "}
                    <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                    </span>{" "}
                    mdarif767778@gmail.com
                  </small>
                </div>
                
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
