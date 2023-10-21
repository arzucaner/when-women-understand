import React from "react";
import "./Button.css";

const Button = (props) => {
  const { title, style, link } = props;

  return (
    <a className={`btn ${style}`} href={link}>
      {title}
    </a>
  );
};

export default Button;
