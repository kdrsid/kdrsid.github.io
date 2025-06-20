import "./Navbar.css";
import icon from '../assets/icon.png';
import { useState } from "react";

export default function Navbar() {
  const [color, setcolor] = useState(false)
  
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setcolor(true)
    }
    else {
      setcolor(false)
    }
  }
  window.addEventListener('scroll', changeColor)

  return (
    <nav className={color ? 'navbar navbar-background' : 'navbar'}>
      <div className="logo">
        <a href="#home"><img src={icon} alt="Logo image is not loaded." width={30} height={30} /></a>
      </div>
      <div className="navbar-links">
        <a href="#home" className="nav-button">Home</a>
        <a href="#about" className="nav-button">About</a>
        <a href="#contact" className="nav-button">Contact</a>
      </div>
    </nav>
  );
}
