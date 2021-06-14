import React from "react";
import RecreatingPhoto from "../Assets/Recruiting.png";
import Email from "../Assets/Email.svg";
import Button from './Button'
import '../Mycss/SubscribeNow.css'

const SubscribeNow = () => {
  return (
    <div className="subscribe_now">
      <div className="subscribe_part1">
        <img src={RecreatingPhoto} alt="" />
      </div>
      <div className="subscribe_part2">
        <p>subscribe now</p>
        <h1>Get every single update you will get</h1>
          <div className="form_innerstyle">
            <form className="sub-form">
              <img src={Email} alt="" />
              <input className="input-field" type="text" name="" id="" />
              <input className="sub-button" type="submit" name="submit" value="subscribe now" />
            </form>
          </div>
          {/* <Button>subscribe now</Button> */}
      </div>
    </div>
  );
};

export default SubscribeNow;
