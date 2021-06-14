import React from "react";
import "../Mycss/FilterCustom.css";
function FilterCustom({ setSearchValue, setAscValue }) {
  return (
    <div className="header_item">
      <div>
        <p>Course category</p>
        <h1>Web Development</h1>
      </div>

      <div className="filter_option">
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          type="search"
          id="search"
          name="search"
          placeholder=" Search"
        />
        <select>
          <option value="volvo">Recent</option>
          <option value="saab">Old</option>
          <option value="vw">Random</option>
        </select>

        <select onChange={(e) => setAscValue(e.target.value)}>
          <option value="asc">A-Z</option>
          <option value="dsc">Z-A</option>
        </select>
      </div>
    </div>
  );
}

export default FilterCustom;
