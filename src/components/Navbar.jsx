import "./Navbar.css";
import icon from '../assets/icon.png';
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home"><img src={icon} alt="Logo image is not loaded." width={30} height={30} /></a>
      </div>
      <div className="navbar-links">
        <a href="#home" className="nav-button">Home</a>
        <a href="#about" className="nav-button">About</a>
        <a href="#skills" className="nav-button">Skills</a>
        <a href="#contact" className="nav-button">Contact</a>
      </div>
    </nav>
  );
}
