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
        <form action="" className="form_style">
          <div className="form_innerstyle">
            <img src={Email} alt="" />
            <input type="text" name="" id="" />
          </div>
          <Button>subscribe now</Button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeNow;
