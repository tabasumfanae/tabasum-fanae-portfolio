import React, { useMemo, useState } from "react";
import "./portfolio.css";
import data from "./data";
import SearchBar from "./searchBar";
import Stars from "./Stars";
function portfolio() {
  const defaultRating = localStorage.getItem("starRating");
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(
    () =>
      data.filter((singleData) =>
        singleData.title.toLowerCase().includes(query.toLocaleLowerCase())
      ),
    [query]
  );
  const renderedProjects = filteredProjects.map(
    ({ id, image, title, github, demo }) => {
      return (
        <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className="btn" target="_blank">
              Source
            </a>
            <a href={demo} className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
          <Stars iconSize={40} defaultRating={defaultRating} />
        </article>
      );
    }
  );

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <SearchBar onchange={(e) => setQuery(e.target.value)} value={query} />
      <div className="container portfolio__container">{renderedProjects}</div>
    </section>
  );
}
export default portfolio;
