import CV from "../../assets/cv.pdf";
let Elements = [
  {
    id: 1,
    title: "Teacher",
    location: "My own home, Herat",
    description:
      "Teaching students (Let's go) system in my private English course at home.",
    buttonText: "View my CV",
    date: "October 2022 - January 2023",
    icon: "work",
  },
  {
    id: 2,
    title: "Web Development(Full Stack)",
    location: "CodeToInspire (CTI)",
    description:
      "studying Frontend Development online. learning skills like HTML, CSS, JAVASCRIPT, BOOTSTRAP and REACT. I am styding this class to be able to carry out my goals by learning these skill to have a decent job in close future.",
    buttonText: "Take a look",
    date: "October 2022 - present",
    icon: "school",
  },
  {
    id: 3,
    title: "Tajrobawi High School",
    location: "Herat, Afghanistan",
    description:
      "Studied 9 grades in Tajrobawi girl's high school before 2021. ",
    buttonText: "Cheak my CV",
    date: "2011 - to present",
    icon: "school",
  },
  {
    id: 4,
    title: "English Language",
    location: "NanoNet Educational Institute, Herat",
    description:
      "English level- Finished Speak Now system of English which took a year in NanoNet academy by Four books. And am able to comminucate with people around the world easily. ",
    buttonText: "CV",
    date: "2022 - 2023",
    icon: "school",
  },
  {
    id: 5,
    title: "ICDL",
    location: "Better Idea Organization (BIO), Herat",
    description:
      "Completed International Computer Driving License (ICDL) at Better Idea Organization (BIO).",
    buttonText: "Find out my Resume",
    date: "June 2022- October",
    icon: "school",
  },
];

import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import "./about.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function timelineElements() {
  let workIconStyles = { background: "#4C9FEB" };
  let schoolIconStyles = { background: "var(--color-bg-variant)" };

  return (
    <div>
      <h1 className="title">Timeline</h1>
      <VerticalTimeline>
        {Elements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href={CV}
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default timelineElements;
