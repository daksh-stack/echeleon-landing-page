import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container d-flex align-items-center justify-content-between">
        <span className="muted">© {new Date().getFullYear()} Echeleon Dev Society</span>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#projects">Projects</a>
          <a href="#join">Join</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



