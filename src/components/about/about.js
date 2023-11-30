import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FiAward } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import TimelineElements from "./timelineElements";
function about() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>9 months working experience as an English teacher.</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>Four diffrent projects have done.</small>
            </article>
          </div>
          <p>
            My name is Tabasum and my last name is Fanae. I am a student at
            school in 10th grade. I am studying Web Development at Code To
            Inspire(CTI). Computer Science is my favorite major so I am gonna
            study this major as soon as possible. This is my portfolio and
            describes all of things about me. Hope you enjoy!😉
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
      <div>
        <TimelineElements></TimelineElements>
      </div>
    </section>
  );
}

export default about;
