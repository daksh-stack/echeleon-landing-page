import "./Hero.css";

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <h1 className="hero-title">
          Build. Ship. Learn.
          <span className="accent-gradient"> Together.</span>
        </h1>
        <p className="hero-subtitle">
          A coding club for creators. From first commit to production launch,
          Echeleon Dev Society is where projects and people grow.
        </p>
        <div className="cta-row">
          <a href="#join" className="btn btn-primary btn-lg glow-btn" aria-label="Join the club">Join the Club</a>
          <a href="#projects" className="btn btn-outline-light btn-lg" aria-label="See projects">See Projects</a>
        </div>
      </div>
      <div className="hero-orbs" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
    </section>
  );
}

export default Hero;


