import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import "./SpacePhotoReel.css";

const images = [img1, img2, img3, img4, img5];

const SpacePhotoReel = () => {
  return (
    <div className="reel-container">
      {/* First track */}
      <motion.div
        className="reel-track"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        {images.map((img, index) => (
          <div className="reel-image-wrapper" key={index}>
            <motion.img
              src={img}
              alt={`space-${index}`}
              className="reel-image"
              whileHover={{ scale: 1.08, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </div>
        ))}
      </motion.div>

      {/* Second track — starts right after the first one */}
      <motion.div
        className="reel-track"
        initial={{ x: "100%" }}
        animate={{ x: ["100%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        {images.map((img, index) => (
          <div className="reel-image-wrapper" key={`dup-${index}`}>
            <img src={img} alt={`space-dup-${index}`} className="reel-image" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SpacePhotoReel;
