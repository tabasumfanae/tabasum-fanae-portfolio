import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

function skills() {
  return (
    <section id="skills">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill />

              <div>
                <h4>HTML</h4>
                <small className=" text-light">Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill />
              <div>
                <h4>CSS</h4>
                <small className=" text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill />
              <div>
                <h4>JavaScript</h4>
                <small className=" text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill />
              <div>
                <h4>React</h4>
                <small className=" text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill />
              <div>
                <h4>Bootstrap</h4>
                <small className=" text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="skills">
          <div className="container">
            <h1 className="title-text">My Skills </h1>
            <div className="skill-box">
              <span className="title">HTML</span>
              <div className="skill-bar html">
                <span className="skill-per html"></span>
                <span className="tooltip">95%</span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">CSS</span>
              <div className="skill-bar css">
                <span className="skill-per css"></span>
                <span className="tooltip">80%</span>
              </div>
            </div>

            <div className="skill-box">
              <span className="title">JavaScript</span>
              <div className="skill-bar javascript">
                <span className="skill-per javascript"></span>
                <span className="tooltip">70%</span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">ReactJS</span>
              <div className="skill-bar reactjs">
                <span className="skill-per reactjs"></span>
                <span className="tooltip">60%</span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">Bootstrap</span>
              <div className="skill-bar bootstrap">
                <span className="skill-per bootstrap"></span>
                <span className="tooltip">85%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default skills;
