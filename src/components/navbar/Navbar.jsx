import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from "react";
import $ from 'jquery';
import {} from '../../index.css'

export default function Navbar() {
  let location = useLocation(); //return object contains current URL
  // console.log(location);
  // useLocation() hook is a function that returns the location object that contains information about the current URL.
  // location object has the following properties: location.pathname=> The path of the current URL, such as /home or /contact
  const [activeLink, setActiveLink] = useState(null);
  useEffect(()=> {
    const navbar = $('.navbar');
    const topNavbar = navbar.offset().top;
    $(window).on("scroll", ()=> {
      let windowTop = $(window).scrollTop();
      // console.log(windowTop);
      if(windowTop > topNavbar) {
        navbar.addClass('fixed-top');
        navbar.removeClass('py-4');
      }else {
        navbar.addClass('py-4');
      }
    })
    let pathname = location.pathname;
    // console.log(pathname);
    setActiveLink(pathname);
  },[location])
  return (
    <nav
      style={{backgroundColor: '#2c3e50',transition: 'all 0.5s'}} className="navbar navbar-expand-lg py-4"
    >
      <div className="container">
        <Link className="navbar-brand text-white text-uppercase fw-bolder fs-2" to="home">Start Framework</Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <Link style={{width: 'fit-content'}} className= {`nav-link text-white text-uppercase fw-bolder mt-3 mt-md-0 px-2 ${activeLink === "/about" ? "active rounded-3" : ""} `} to="about">about</Link>
            </li>
            <li className="nav-item me-3">
              <Link style={{width: 'fit-content'}} className={`nav-link text-white text-uppercase fw-bolder mt-3 mt-md-0 px-2 ${activeLink === "/portfolio" ? "active rounded-3" : ""}`} to="portfolio">portfolio</Link>
            </li>
            <li className="nav-item me-3">
              <Link style={{width: 'fit-content'}} className={`nav-link text-white text-uppercase fw-bolder mt-3 mt-md-0 px-2 ${activeLink === "/contact" ? "active rounded-3" : ""} `} to="contact">contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  )
}

