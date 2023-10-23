import React from "react";
import { Link } from "react-router-dom";
import "../styles/DiscussionCard.css";

const DiscussionCard = ({ discussion }) => {
  const { post, comment, createdAt, user } = discussion;
  return (
    <>
      <div className="discussion-container m-3">
        <div className="post-information">
          <div className="discussion-posts d-flex align-items-start justify-content-start">
            <div className="orange-dot mr-4"></div>
            <p className="user-text ml-2">{user}</p>
            <div className="black-dot"></div>
            <p className="discussion-date mr-2">{createdAt}</p>
          </div>
        </div>

        <div>
          <h3>{post}</h3>

          <Link to="" className="no-underline d-flex align-items-start justify-content-start">
           
            <button className="comment-btn"> <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                d="M9 16.25C10.335 16.25 11.6401 15.8541 12.7501 15.1124C13.8601 14.3707 14.7253 13.3165 15.2362 12.0831C15.7471 10.8497 15.8808 9.49252 15.6203 8.18314C15.3599 6.87377 14.717 5.67104 13.773 4.72703C12.829 3.78303 11.6262 3.14015 10.3169 2.8797C9.00749 2.61925 7.65029 2.75292 6.41689 3.26382C5.18349 3.77471 4.12928 4.63987 3.38758 5.7499C2.64588 6.85994 2.25 8.16498 2.25 9.5C2.25 10.616 2.52 11.6675 3 12.5953L2.25 16.25L5.90475 15.5C6.83175 15.9793 7.88475 16.25 9 16.25Z"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{comment}</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DiscussionCard;
