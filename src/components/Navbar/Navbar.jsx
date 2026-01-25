import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-link">
        <a href="#home">
        </a>
      </div>

      <div className="nav-links">
        <a className="nav-link" href="#about">About</a>
        <a className="nav-link" href="#schedule">Schedule</a>
        <a className="nav-link" href="#faq">FAQ</a>
        <a className="nav-link" href="#team">Our Board</a>
      </div>
    </nav>
  );
}
