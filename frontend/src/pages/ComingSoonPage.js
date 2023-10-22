import Hero from "../components/Hero";
import Button from "../components/shared/Button";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/SupportPage.css";

const ComingSoonPage = () => {
  return (
    <>
      <Navbar />
      
<div className="container-fluid text-center">
<img src="/coming-soon.jpg" alt="featured story" />
<h3 className="m-4">We are working on getting all of these features here for you! Keep checking back in with us.</h3>

</div>
      
      <Footer />
    </>
  );
};

export default ComingSoonPage;
