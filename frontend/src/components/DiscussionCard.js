import React from "react";
import { Link } from "react-router-dom";

const DiscussionCard = ({ discussion }) => {
  const { post, comment, createdAt, user } = discussion;
  return (
    <>
      <p>{createdAt}</p>
      <div>{post}</div>
      <Link to="">
        <button>{comment}</button>
      </Link>
    </>
  );
};

export default DiscussionCard;
