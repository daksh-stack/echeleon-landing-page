import "./styles/global.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Section from "./components/Section.jsx";
import Footer from "./components/Footer.jsx";
import FloatingBackground from "./components/FloatingBackground.jsx";
import SpacePhotoReel from "./components/SpacePhotoReel.jsx";

function App() {
  return (
    <>
      <FloatingBackground />
      <div className="page-wrap">
        <Navbar />
        <Hero />
        <main>
          <Section
            id="about"
            eyebrow="Echeleon Dev Society"
            title="Who We Are"
            index={0}
          >
            <p>
              Echeleon Dev Society is a collective of innovators, dreamers, and
              developers who believe in turning curiosity into creation. We
              build open-source projects, host hackathons, and explore how
              technology can make the impossible — inevitable.
            </p>
          </Section>

          <Section
            id="events"
            eyebrow="Events & Workshops"
            title="What We Do"
            index={1}
          >
            <p>
             Hackathons that push imagination. <br />
             Industry-led sessions from top engineers. <br />
             Hands-on study circles and onboarding for beginners. <br />
             Open-source sprints and real-world collaborations.
            </p>
          </Section>

          <Section
            id="projects"
            eyebrow="Innovation in Action"
            title="Our Projects"
            index={2}
          >
            <p>
              From AI-driven platforms to interactive web systems, every project
              is a mission. We build tools that enhance learning, creativity, and
              collaboration — coded with purpose, designed with passion.
            </p>
          </Section>

          <Section
            id="join"
            eyebrow="Get Involved"
            title="Join The Crew"
            index={3}
          >
            <p>
              Ready to explore, build, and lead with us? Join our growing network
              of passionate creators. Whether you're a beginner or a pro, there’s
              a place for you at Echeleon.
            </p>
            <div className="cta-row">
              <a
                className="btn btn-primary glow-btn"
                href="https://linktr.ee/EDSCDGI"
                aria-label="Join our Discord"
              >
                Join Us
              </a>

              <a
                className="btn btn-outline-light"
                href="#projects"
                aria-label="View projects"
              >
                View Projects
              </a>
            </div>
          </Section>

          <SpacePhotoReel />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
