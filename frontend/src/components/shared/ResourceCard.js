import React from 'react';
import './ResourceCard.css';

const ResourceCard = ({ image, title, description, link, bg, buttonStyle, buttonText }) => {
  const cardClass = bg ? 'card-with-bg' : 'card-without-bg';

  return (
    <div className={`resource-card ${cardClass}`}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => window.location.href = link} className={`custom-button ${buttonStyle}`}>
      {buttonText}
    </button>
    </div>
  );
};

export default ResourceCard;
