import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <a href="#home" className="nav-button">Home</a>
        <a href="#about" className="nav-button">About</a>
        <a href="#contact" className="nav-button">Contact</a>
      </div>
    </nav>
  );
}
