import React from "react";
import { Link } from "react-router-dom";

const NewDiscussionPage = () => {
  return (
    <>
      <div>logo</div>
      <h1>Start a discussion</h1>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Choose what other people can see you as
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>User's name</option>
            <option value="anon">Anonymous</option>
          </select>
        </div>
        <div class="mb-3 form-check">
          <textarea
            class="form-control"
            placeholder="Share your experience here..."
          ></textarea>
        </div>
        <Link to="/discussions">
          <button>Cancel</button>
        </Link>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Post
        </button>
        {/* Modal */}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Your post has been submitted!
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <Link to="/">
                  <button type="button" class="btn btn-primary">
                    Return to home
                  </button>
                </Link>
                <Link to="/discussions">
                  <button type="button" class="btn btn-primary">
                    Go back to discussions
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End of modal */}
      </form>
      <div className="description">
        <h3>Posting to WWU</h3>
        <ol>
          <li>Be honest about your experience.</li>
          <li>Ensure your posts are relevant to the forum topic.</li>
          <li>Protect the privacy of others.</li>
          <li>Follow the instructions of forum moderators.</li>
        </ol>
      </div>
    </>
  );
};

export default NewDiscussionPage;
