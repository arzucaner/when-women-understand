import React from "react";

const NavigationLink = ({ name, source }) => {
  return (
    <li>
      <a className="dropdown-item" href={source}>
        {name}
      </a>
    </li>
  );
};

export default NavigationLink;
