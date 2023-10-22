import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

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
            <h1 className="footer-title text-left pb-2">Together, let's empower, support, and heal</h1>
            <hr className="bg-light" />
          </div>
          <div className="col-md-3 text-center">
            <Link
              className="navbar-brand d-flex flex-column fw-bold footer-a"
              to="#"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "30px",
              }}
            >
              <span className="mb-n1">When Women</span>
              <span>Understand</span>
            </Link>
          </div>
          <div className="col-md-2 text-center">
            <h4>Support</h4>
            <ul>
              <li>
                <Link className="footer-a" to="/coming">
                  Crisis Chat
                </Link>
              </li>
              <li>
                <Link to="/coming" className="footer-a">
                  24/7 helpline
                </Link>
              </li>
              <li>
                <Link to="/coming" className="footer-a">
                  Emergency resources
                </Link>
              </li>
              <li>
                <Link to="/coming" className="footer-a">
                  Find a shelter
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 text-center">
            <h4>Resources</h4>
            <ul>
              <li>
                <Link to="/identify" className="footer-a">
                  Emotional guides
                </Link>
              </li>
              <li>
                <Link to="/coming" className="footer-a">
                  Statistics and reports
                </Link>
              </li>
              <li>
                <Link to="/coming" className="footer-a">
                  Emergency resources
                </Link>
              </li>
              <li>
                <Link to="/coming" className="footer-a">
                  Find a shelter
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 text-center">
            <h4>Community</h4>
            <ul>
              <li>
                <Link to="/support" className="footer-a">
                  Survivor stories
                </Link>
              </li>
              <li>
                <Link to="/coming" className="footer-a">
                  Support groups
                </Link>
              </li>
              <li>
                <Link to="/coming" className="footer-a">
                  Volunteer groups
                </Link>
              </li>
              <li>
                <Link to="/coming" className="footer-a">
                  Local support
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4>Learn More</h4>
            <ul>
              <li>
                <Link to="/identify" className="footer-a">
                  What is psychlogical abuse?
                </Link>
              </li>
              <li>
                <Link to="/identify" className="footer-a">
                  Signs of abuse
                </Link>
              </li>
              <li>
                <Link to="/coming" className="footer-a">
                  Why it matters
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
