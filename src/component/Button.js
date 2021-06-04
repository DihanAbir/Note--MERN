import React from "react";
import "../Mycss/Button.css";

const Button = (props) => {
  return (
    <button className="button_style" onClick={props.children}>
      {props.children}
    </button>
  );
};

export default Button;
