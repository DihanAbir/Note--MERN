import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <button className="button_style" onClick={props.children}>
      {props.children}
    </button>
  );
};

export default Button;
