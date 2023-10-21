import { PassageAuth } from "@passageidentity/passage-react";
import "../styles/Registration.css";

const RegistrationPage = () => {
  return (
    <div className="container-fluid registration-page">
      <div className="row">
        <div
          className="col d-flex flex-column justify-content-between"
          style={{
            backgroundImage: `linear-gradient(rgba(31, 59, 33, 0.5), rgba(31, 59, 33, 0.5)), url('/Registration.jpg')`,
            objectFit: "scale-down",
            aspectRatio: "1/1.5",
            backgroundSize: "cover",
          }}
        >
          <img
            src="/Workmark white.png"
            alt="When Women Understand Logo"
            style={{
              height: "auto",
              width: "auto",
              maxWidth: "12rem",
              maxHeight: "auto",
              paddingLeft: "2.5rem",
              paddingTop: "2rem",
            }}
          ></img>
          <div
            className="align-self-end justify-self-start text-start text-light"
            style={{
              fontFamily: "'Playfair-Display', serif",
              paddingLeft: "2.5rem",
              paddingRight: "3.25rem",
              paddingBottom: "6.5rem",
              fontWeight: 400,
              lineHeight: "normal",
              fontSize: "5rem",
            }}
          >
            Together, let's empower, support, and heal
          </div>
        </div>
        <div className="form-container col d-flex justify-content-center align-items-center">
          <PassageAuth />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
