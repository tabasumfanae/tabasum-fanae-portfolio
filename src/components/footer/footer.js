import React from "react";
import Map from "./map";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="" className="footer__logo">
        TABASUM
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contacts">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https::/facebook.com/Elham Fanae">
          <FaFacebookF />
        </a>
        <a href="https::/instagram.com/tabasum_fanae">
          <FiInstagram />
        </a>
        <a href="https::/twitter.com/WaezFanae">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="map">
        <h2>Cheack to find my location!</h2>
        <h3>Kabul,Afghanistan</h3>
        <Map />
      </div>
      <div className="footer__copyright">
        <small>&copy; Manu All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
