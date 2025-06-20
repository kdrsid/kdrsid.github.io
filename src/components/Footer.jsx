import React from 'react'
import "./Footer.css";
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebook, FaSnapchat  } from "react-icons/fa";

const Footer = () => {
   const scrollToTop = () => {
    const homeSection = document.getElementById("home");
    homeSection?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="footer-section">
      <div className="footer">
        <button className="footer-button" onClick={scrollToTop}>^</button>
      </div>
      <div className="icons">
        <a href="https://www.instagram.com/c_owo_qwq_?igsh=MWxvMXprNDZveTFxdQ=="><FaInstagram size={40} className='icon'/></a>
        <a href="https://www.linkedin.com/in/kris-0-965047369"><FaLinkedinIn size={40} className='icon'/></a>
        <a href="https://github.com/kdrsid"><FaGithub size={40} className='icon'/></a>
        <a href="https://www.facebook.com/share/1AoCnAnGNt/"><FaFacebook size={40} className='icon'/></a>
        <a href="https://www.snapchat.com/add/chrisqwqowo?share_id=7As-ptSmU5I&locale=en-GB"><FaSnapchat size={40} className='icon'/></a>
      </div>
    </nav>
  )
}

export default Footer