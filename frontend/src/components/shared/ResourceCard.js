import React from 'react';
import './ResourceCard.css';

const ResourceCard = ({ image, title, description, link, bg }) => {
  const cardClass = bg ? 'card-with-bg' : 'card-without-bg';

  return (
    <div className={`resource-card ${cardClass}`}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} className="learn-more-link">Learn More</a>
    </div>
  );
};

export default ResourceCard;
