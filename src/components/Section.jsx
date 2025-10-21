import "./Section.css";

/*
  Generic content section with subtle entrance animation.
*/
function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        {eyebrow && <p className="eyebrow fade-up">{eyebrow}</p>}
        {title && <h2 className="section-title fade-up-delay">{title}</h2>}
        <div className="section-body fade-up-more">
          {children}
        </div>
      </div>
    </section>
  );
}

export default Section;


