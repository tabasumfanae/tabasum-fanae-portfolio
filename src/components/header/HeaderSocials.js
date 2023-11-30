import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com/in/tabasum-fanae"
        rel="noopener noreferrer"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/tabasumfanae"
        rel="noopener noreferrer"
        target="_blank"
      >
        <BsGithub />
      </a>
      <a
        href="https://twitter.com/WaezFanae"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FiTwitter />
      </a>
    </div>
  );
}

export default HeaderSocials;
