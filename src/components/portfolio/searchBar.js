//import data from "./data";
import "./portfolio.css";

function searchBar({ onchange, value }) {
  return (
    <>
      <h2 className="search-text">Search Projects:</h2>
      <input
        className="searchBar"
        value={value}
        onChange={onchange}
        type="search"
      />
    </>
  );
}
export default searchBar;
