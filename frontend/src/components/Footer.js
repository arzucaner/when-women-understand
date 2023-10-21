import React from "react";
import './Footer.module.css';

const Footer = () => {
  return (
<footer style={{ backgroundColor: '#1F3B21', color: '#FAF8F6', fontFamily: "'Playfair Display', serif" }}>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-12">
            <h1 classname="footer-h1" >You aren't alone</h1>
            <hr className="bg-light" />
          </div>
          <div className="col-md-2 text-center">
          <a
              class="navbar-brand d-flex flex-column fw-bold"
              href="#"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="mb-n1">When Women</span>
              <span>Understand</span>
            </a>
          </div>
          <div className="col-md-2 text-center">
            <h5>Support</h5>
            <ul>
              <ol><a class="footer-a" href="#">Crisis Chat</a></ol>
              <ol><a href="#">24/7 helpline</a></ol>
              <ol><a href="#">Emergency resources</a></ol>
              <ol><a href="#">Find a shelter</a></ol>
            </ul>
          </div>
          <div className="col-md-2 text-center">
            <h5>Resources</h5>
            <ul>
            <ol><a href="#">Emotional guides</a></ol>
            <ol><a href="#">Statistics and reports</a></ol>
            <ol><a href="#">Emergency resources</a></ol>
            <ol><a href="#">Find a shelter</a></ol>
            </ul>
          </div>
          <div className="col-md-2 text-center">
            <h5>Community</h5>
            <ul>
            <ol><a href="#">Survivor stories</a></ol>
            <ol><a href="#">Support groups</a></ol>
            <ol><a href="#">Volunteer groups</a></ol>
            <ol><a href="#">Local support</a></ol>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Learn More</h5>
            <ul>
            <ol><a href="#">What is psychlogical abuse?</a></ol>
            <ol><a href="#">Signs of abuse</a></ol>
            <ol><a href="#">Why it matters</a></ol>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
