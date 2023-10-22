import React from "react";

const TeamInfoCard = ({ name, title, img }) => {
  return (
    <li
      className="member"
      style={{
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className=""
        style={{
          backgroundImage: `url(/Headshots/${img}`,
          width: "11rem",
          height: "15rem",
          alignContent: "center",
          alignSelf: "center",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          marginBottom: "1rem",
        }}
      ></div>
      <div className="card-text d-flex flex-column">
        <p>{name}</p>
        <p style={{ fontSize: "0.67rem", marginTop: "-1rem" }}>{title}</p>
      </div>
    </li>
  );
};

export default TeamInfoCard;
