import React from "react";
import { Navbar } from "../components/Navbar";
import TeamInfoCard from "../components/TeamInfoCard";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import "../styles/AboutUs.css";

const TEAM = [
  {
    name: "Arzu Caner",
    title: "Team Lead",
    img: "/arzu.jpg",
  },
  {
    name: "Maryna Kosau",
    title: "UX Designer",
    img: "/maryna.png",
  },
  {
    name: "Onyinye Chiatula",
    title: "UI Designer",
    img: "/onyinye.png",
  },
  {
    name: "Rose Le",
    title: "Full-Stack Software Engineer",
    img: "/rose.png",
  },
  {
    name: "Rae Ludwig",
    title: "Full-Stack Developer",
    img: "/rae.png",
  },
  {
    name: "Sara Swingle",
    title: "Full-Stack Developer",
    img: "/sara.png",
  },
];
const AboutUsPage = () => {
  return (
    <div
      style={{
        fontFamily: "Playfair Display, serif",
      }}
    >
      <Navbar />
      <section className="hero">
        <h1 className="heading">
          Empowering Women, Breaking Silence: Discover the Heart Behind When
          Women Understand
        </h1>
        <div
          className="container-fluid bg-image d-flex flex-column"
          style={{
            background: `url('/About_Us.png'), lightgray 50% / cover no-repeat`,
            height: "600px",
            alignContent: "center",
            alignSelf: "center",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            marginBottom: "6.5rem",
          }}
        ></div>
      </section>
      <div className="mission-statement">
        <div
          style={{
            width: "70rem",
          }}
        >
          <p className="mission-statement-text">
            Our dedicated team aims to raise awareness and end the hidden form
            of violence against women, making a meaningful difference in the
            lives of those who need support.
          </p>
        </div>
      </div>
      <section
        className="team d-flex flex-column justify-content-center text-center"
        style={{
          paddingLeft: "3.5rem",
          paddingRight: "3.5rem",
          marginTop: "5.5rem",
        }}
      >
        <h3 style={{ paddingBottom: "3rem" }}>Meet the Team</h3>
        <ul
          className="d-flex flex-row justify-content-center"
          style={{
            gap: "1rem",
            marginLeft: "-2rem",
          }}
        >
          {TEAM.map((member) => {
            return (
              <TeamInfoCard
                name={member.name}
                title={member.title}
                img={member.img}
              />
            );
          })}
        </ul>
      </section>
      <section
        className="volunteer"
        style={{
          padding: "3.75rem 22rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <h1>Give back, make an impact</h1>
        <p
          style={{
            fontFamily: "Roboto, san-serif",
            width: "36rem",
            textAlign: "center",
          }}
        >
          Make a meaningful impact by moderating groups, organizing events, and
          more. Your support matters.
        </p>
        <Link to="/coming">
          <button
            className="give-back-btn btn-outline-dark btn-lg mb-5"
            type="button"
          >
            Become a volunteer
          </button>
        </Link>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
