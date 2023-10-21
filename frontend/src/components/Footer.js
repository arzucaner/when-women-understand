import React from "react";
import './Footer.module.css';

const Footer = () => {
  return (
<footer style={{ backgroundColor: '#1F3B21', color: '#FAF8F6', fontFamily: "'Playfair Display', serif" }}>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-12">
          <h1 className="footer-h1 text-left pb-2">You aren't alone</h1>
            <hr className="bg-light" />
          </div>
          <div className="col-md-3 text-center">
          <a
  className="navbar-brand d-flex flex-column fw-bold"
  href="#"
  style={{ fontFamily: "'Playfair Display', serif", fontSize: "30px" }}
>
  <span className="mb-n1">When Women</span>
  <span>Understand</span>
</a>

          </div>
          <div className="col-md-2 text-center">
            <h4>Support</h4>
            <ul>
              <li><a className="footer-a" href="#">Crisis Chat</a></li>
              <li><a href="#">24/7 helpline</a></li>
              <li><a href="#">Emergency resources</a></li>
              <li><a href="#">Find a shelter</a></li>
            </ul>
          </div>
          <div className="col-md-2 text-center">
            <h4>Resources</h4>
            <ul>
            <li><a href="#">Emotional guides</a></li>
            <li><a href="#">Statistics and reports</a></li>
            <li><a href="#">Emergency resources</a></li>
            <li><a href="#">Find a shelter</a></li>
            </ul>
          </div>
          <div className="col-md-2 text-center">
            <h4>Community</h4>
            <ul>
            <li><a href="#">Survivor stories</a></li>
            <li><a href="#">Support groups</a></li>
            <li><a href="#">Volunteer groups</a></li>
            <li><a href="#">Local support</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4>Learn More</h4>
            <ul>
            <li><a href="#">What is psychlogical abuse?</a></li>
            <li><a href="#">Signs of abuse</a></li>
            <li><a href="#">Why it matters</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
