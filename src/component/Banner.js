import React from "react";
import Button from "./Button.js";
import Analytic from "../Assets/Analytic.svg";
import '../Mycss/Banner.css'

function Banner() {
  return (
   
      <div className="Banner">
        <div className="banner_part_1">
          <h3>Become Master</h3>
          <h1>
            Learn New Skills Online
            <br /> Find Best Courses
          </h1>
          <div className="button_class">
            <Button>click</Button>
            <button className="button_here">here</button>
          </div>
        </div>
        <div className="banner_part_2">
          <img src={Analytic} alt="" />
        </div>
      </div>
   
  );
}

export default Banner;
