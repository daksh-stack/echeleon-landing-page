import React from "react";
import {motion} from "framer-motion";
import planet from "../assets/planet.png"


const FloatingBackground =()=> {
    return(
        <motion.img
        src= {planet}
        alt="planet"
        className="floating-bg"
        initial= {{x:0, y:0}}
        animate= {{
            x: ["0%", "20%", "-20%", "0%"],  // move left-right
            y: ["0%", "-15%", "15%", "0%"],  // move up-down
            rotate: [0, 5, -5, 0],            // slight rotation
        }}
        transition={{duration: 15,          // 15 seconds for full cycle
        repeat: Infinity,      // loop forever
        repeatType: "mirror",  // go back smoothly
        ease: "easeInOut",
      }}
    />
    );
};

export default FloatingBackground;