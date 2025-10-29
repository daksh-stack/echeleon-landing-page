import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/fav.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav-wrap ${scrolled ? "nav-blur" : ""}`}>
      <nav className="nav-container">
        <a href="#top" className="brand">
          <img src={logo} alt="logo" className="brand-mark" />
          <span className="brand-name">Echeleon Dev Society</span>
        </a>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#projects">Projects</a></li>
          <li>
            <a href="#join" className="join-btn">
              Join
              <span className="pulse-glow"></span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
