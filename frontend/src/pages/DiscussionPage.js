import React from "react";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import NewDiscussionPage from "./NewDiscussionPage";
import "../styles/DiscussionPage.css";
import axios from "axios";
import DiscussionCard from "../components/DiscussionCard";
const DISCUSSIONS = [
  {
    user: "anon",
    post: "discussion title",
    createdAt: "12/03/2023",
    comment: "comment",
    answer: "discussion body content",
  },
  {
    user: "anon",
    post: "discussion title",
    createdAt: "12/03/2023",
    comment: "comment",
    answer: "discussion body content",
  },
  {
    user: "anon",
    post: "discussion title",
    createdAt: "12/03/2023",
    comment: "comment",
    answer: "discussion body content",
  },
  {
    user: "anon",
    post: "discussion title",
    createdAt: "12/03/2023",
    comment: "comment",
    answer: "discussion body content",
  },
];

const DiscussionPage = () => {
  // const [posts, setPosts] = useState([])
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3000/discussions')
  //     .then((response) => {
  //       const postsList = response.data.map((post) => {
  //         return {
  //           id: post._id,
  //           title: post.title,
  //           description: post.post,
  //           isComplete: post.is_complete,
  //         };
  //       });
  //       setPosts(postsList);
  //     })
  //     .catch(() => {
  //       console.log('This request could not go through');
  //     });
  // }, []);

  return (
    <>
      <Navbar />
      <div
        className="page-content"
        style={{
          padding: "0 3.5rem",
        }}
      >
        <section
          className="hero d-flex flex-row"
          style={{
            gap: "8rem",
          }}
        >
          <div
            style={{
              marginTop: "2.75rem",
            }}
          >
            <div
              style={{
                width: "37rem",
                fontSize: "3.5rem",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                letterSpacing: "-0.07rem",
                color: "#1F3B21",
              }}
            >
              A safe place for learning and sharing
            </div>
            <p
              style={{
                fontFamily: "Roboto, san-serif",
                fontSsize: "1.25rem",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "1.875rem",
                color: "#1F3B21",
                width: "32rem",
              }}
            >
              Connect with others share your stories, learn from being in a sub
            </p>
          </div>
          <div
            className="container-fluid bg-image"
            style={{
              background: `url('/About_Us.png'), lightgray 50% / cover no-repeat`,
              width: "32.5rem",
              height: "21.5rem",
              alignContent: "center",
              alignSelf: "center",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              marginBottom: "6.5rem",
            }}
          ></div>
        </section>
        <section className="d-flex">
          <div className="featured-posts">
            <div className="featured-header">Featured Discussions</div>
            <div className="featured-posts-content">
              {DISCUSSIONS.map((discussion) => {
                return <DiscussionCard discussion={discussion} />;
              })}
            </div>
          </div>
          <Link to="/new_discussion">
            <button>Start a discussion</button>
          </Link>
        </section>
      </div>
    </>
  );
};

export default DiscussionPage;
