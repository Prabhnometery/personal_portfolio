import React from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [Toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "skills", "work", "testimonial", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>
              <span>{item}</span>
            </a>
          </li>
        ))}
      </ul>
      <a href="https://drive.google.com/file/d/1C2t63DPrwXZE1UIWXzyxRDxEW3z3VoPv/view?usp=sharing"><button class="glow-on-hover" type="button">DOWNLOAD RESUME 📥</button></a>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {Toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "skills", "work", "testimonial", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
