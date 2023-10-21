import React from "react";
import "./Footer.module.css";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#1F3B21",
        color: "#FAF8F6",
        fontFamily: "'Playfair Display', serif",
      }}
    >
      <div className="container py-4">
        <div className="row">
          <div className="col-md-12">
            <h1 classname="footer-h1">You aren't alone</h1>
            <hr className="bg-light" />
          </div>
          <div className="col-md-2 text-center">
            <a
              className="navbar-brand d-flex flex-column fw-bold"
              href="#"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="mb-n1">When Women</span>
              <span>Understand</span>
            </a>
          </div>
          <div className="col-md-2 text-center">
            <h5>Support</h5>
            <ul className="footer-links-list">
              <li className="footer-link">
                <a className="footer-a" href="#">
                  Crisis Chat
                </a>
              </li>
              <li className="footer-link">
                <a href="#">24/7 helpline</a>
              </li>
              <li className="footer-link">
                <a href="#">Emergency resources</a>
              </li>
              <li className="footer-link">
                <a href="#">Find a shelter</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 text-center">
            <h5>Resources</h5>
            <ul className="footer-links-list">
              <li className="footer-link">
                <a href="#">Emotional guides</a>
              </li>
              <li className="footer-link">
                <a href="#">Statistics and reports</a>
              </li>
              <li className="footer-link">
                <a href="#">Emergency resources</a>
              </li>
              <li className="footer-link">
                <a href="#">Find a shelter</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 text-center">
            <h5>Community</h5>
            <ul className="footer-links-list">
              <li className="footer-link">
                <a href="#">Survivor stories</a>
              </li>
              <li className="footer-link">
                <a href="#">Support groups</a>
              </li>
              <li className="footer-link">
                <a href="#">Volunteer groups</a>
              </li>
              <li className="footer-link">
                <a href="#">Local support</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Learn More</h5>
            <ul className="footer-links-list">
              <li className="footer-link">
                <a href="#">What is psychlogical abuse?</a>
              </li>
              <li className="footer-link">
                <a href="#">Signs of abuse</a>
              </li>
              <li className="footer-link">
                <a href="#">Why it matters</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
