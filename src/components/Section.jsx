import React from "react";
import { motion } from "framer-motion";
import "./Section.css";

function Section({ id, eyebrow, title, children, index }) {
  // Different animation variants per section
  const variants = [
    { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } }, // fade up
    { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } }, // slide from left
    { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } }, // slide from right
    { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }, // zoom in
  ];

  const animation = variants[index % variants.length];

  return (
    <motion.section
      id={id}
      className="tech-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={animation}
    >
      <div className="tech-container">
        {eyebrow && <p className="tech-eyebrow">{eyebrow}</p>}
        {title && <h2 className="tech-title">{title}</h2>}
        <div className="tech-body">{children}</div>
      </div>
    </motion.section>
  );
}

export default Section;
