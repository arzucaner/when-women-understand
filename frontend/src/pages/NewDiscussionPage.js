import React from "react";
import { Link } from "react-router-dom";
import "../styles/NewDiscussionPage.css";

const NewDiscussionPage = () => {
  return (
    <>
      <div className="logo"></div>

      <div className="container">
        <div className="row">
          <div className="col-md-7 mb-4">
            <div className="new-discussion-input">
              <h1>Start a discussion</h1>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Choose what other people can see you as
                  </label>
                  <div className="select-container">
                    <select
                      className="form-select user-name-discussion"
                      aria-label="Default select example"
                    >
                      <option selected>User's name</option>
                      <option value="anon">Anonymous</option>
                    </select>
                    <svg className="discussion-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      className="new-discussions"
                    >
                      <path
                        d="M9.33464 13.3333L16.0013 20L22.668 13.3333"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <textarea
                    className="form-control share mt-4"
                    placeholder="Share your experience here..."
                  ></textarea>
                </div>

                {/* Modal */}
                {/* (Modal content here) */}
                {/* End of modal */}
              </form>
              <div className="buttons d-flex justify-content-end">
                <Link to="/discussions">
                  <button className="transparent-btn mr-1" type="button">
                    Cancel
                  </button>
                </Link>
                <button className="green-btn ">Post</button>
              </div>
            </div>
          </div>

          <div className="col-md-5 mb-4">
            <div className="new-discussion-posting">
              <h3>Posting to WWU</h3>
              <ol>
                <li>Be honest about your experience.</li>
                <li>Ensure your posts are relevant to the forum topic.</li>
                <li>Protect the privacy of others.</li>
                <li>Follow the instructions of forum moderators.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewDiscussionPage;
