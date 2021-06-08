import React from "react";
import '../Mycss/FilterCustom.css'
function FilterCustom() {
  return (
    <div className="header_item">
      <div>
        <p>Course category</p>
        <h1>Web Development</h1>
      </div>

      <div className="filter_option">
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="vw">VW</option>
          <option value="audi">Audi</option>
        </select>
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="vw">VW</option>
          <option value="audi">Audi</option>
        </select>
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="vw">VW</option>
          <option value="audi">Audi</option>
        </select>
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="vw">VW</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </div>
  );
}

export default FilterCustom;
