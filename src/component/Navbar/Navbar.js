import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {Link} from 'react-router-dom'
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import './Navber.css'

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  if(loading){
    return <Loading/>
  }
  return (
    <div className="mb-5">
      <nav className="navbar navbar-expand-lg navbar-light home-navbar fixed-top  py-3 ">
        <div className="container">
          <a className="navbar-brand" href="#home">
            {'< Md Arif />'}
          </a>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={'/'} className="nav-link text-white active">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#services">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#about-us">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                {
                  user ?<button className="btn text-white" onClick={()=>signOut(auth)}>Sign Out</button>: <Link to='/login' className="nav-link text-white">Login</Link> 
                }
               </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
