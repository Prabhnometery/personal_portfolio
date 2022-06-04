import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://github.com/Prabhnometery">
        <BsGithub />
      </a>
      <a href="https://www.linkedin.com/in/prabh-simran-singh-badwal-6895b016a/">
        <BsLinkedin />
      </a>
      <a href="/">
        <FaFacebookF />
      </a>
    </div>
  );
};

export default SocialMedia;
