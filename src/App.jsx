import "./styles/global.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Section from "./components/Section.jsx";
import Footer from "./components/Footer.jsx";
import FloatingBackground from "./components/FloatingBackground.jsx"
function App() {
  return (
    <>
      <FloatingBackground />
      <div className="page-wrap">
        <Navbar />
        <Hero />
        <main>
          <Section id="about" title="Who We Are" eyebrow="Echeleon Dev Society">
            Echeleon Dev Society is a student-driven coding community focused on
            building, learning, and sharing together. We host hands-on
            workshops, ship open-source projects, and help members level up in
            web, app, and AI development. Along with
          </Section>
          <Section id="events" title="What We Do" eyebrow="Events & Workshops">
            • Empowering students to succeed in hackathons with all guidance and
            resources. • Speaker sessions with industry mentors •
            Beginner-friendly onboarding and study circles • Open-source sprints
            and hackathons
          </Section>

          {/* <Section id="projects" title="Projects" eyebrow="Open Source & Labs">
            Explore collaborative projects spanning web platforms, design systems, automation tools, and ML experiments. Contribute, learn modern stacks, and ship real features.
          </Section> */}

          <Section id="join" title="Join The Crew" eyebrow="Get Involved">
            Ready to build with us? Join us on social platforms, follow
            announcements, and hop into your first issue. Everyone is
            welcome—beginners to experts.
            <div className="cta-row">
              <a
                className="btn btn-primary glow-btn"
                href="https://linktr.ee/EDSCDGI"
                aria-label="Join our Discord"
              >
                Join us
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
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
