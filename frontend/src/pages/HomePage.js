import Hero from "../components/Hero";
import ResourceCard from "../components/shared/ResourceCard";
import Button from "../components/shared/Button";
import { Navbar } from "../components/Navbar";
import "../App.css";
import Footer from '../components/Footer';



const HomePage = () => {
  return (
    <>
      <div
        className="container-fluid bg-image d-flex flex-column"
        style={{
          backgroundImage: `linear-gradient(rgba(31, 59, 33, 0.5), rgba(31, 59, 33, 0.5)), url('/Hero.jpg')`,
          height: "600px",
          alignContent: "center",
          alignSelf: "center",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "sepia(33%)",
        }}
      >
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a
              className="navbar-brand d-flex flex-column fw-bold"
              href="#"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="mb-n1">When Women</span>
              <span>Understand</span>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>

                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="d-flex h-100">
          <div
            className="text-white text-start pb-5 ps-5 mb-5 grid row-gap-3"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            <div className="hero-text mb-3 pb-3">
              <h1
                className="py-2 mb-3 display-1"
                id="hero-text"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                We are silencing abuse
              </h1>
              <div className="py-2 fs-5">
                Let's put an end to psychlogical abuse together
              </div>
            </div>

            <a className="btn btn-outline-light btn-lg" href="#!" role="button">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="middle-content">
        <h3>We are here to put an end to psychological abuse</h3>

        <div className="resource-card-box">
          <ResourceCard
     
            image="learn.jpg"
            title="Learn"
            description="Being able to identify that there is an issue is an important first step. Learn more about psychological abuse and how to identify it."
            link="/destination-page-url" // TODO:Replace with the actual URL
            bg={true} // Card with background
            buttonStyle="learn-more-btn"
            buttonText="Learn More"
          />
          <ResourceCard
            image="resource.jpg"
            title="Resources"
            description="Need help? We have a list of resources to help you get started."
            link="/destination-page-url" // TODO:Replace with the actual URL
            bg={true} // Card with background
            buttonStyle="learn-more-btn"
            buttonText="Learn More"
          />
          <ResourceCard
            image="community.jpg"
            title="Community"
            description="Knowing that you are not alone in this journey is the first step to healing. Find a community of survivors and supporters to help you through this difficult time."
            link="/destination-page-url" // TODO:Replace with the actual URL
            bg={true} // Card with background
            buttonStyle="learn-more-btn"
            buttonText="Learn More"
          />
        </div>

        <h3 style={{ fontFamily: "'Playfair Display', serif" }}>
          Finding Strength in Support: Your Guide to Seeking Help and Healing
          from Psychological Abuse
        </h3>

        <div className="resource-card-box">
          <ResourceCard
            image="Identify abuse.jpg"
            title="Identify the abuse"
            description="The first step to healing is to identify the abuse. Learn more about how to identify psychological abuse."
            // link="/destination-page-url" // TODO:Replace with the actual URL
            bg={false} // Card without background
            buttonStyle="no-bkg-btn"
            buttonText="Read more"
        
          />
          <ResourceCard
            image="Get Help.jpg"
            title="Get help"
            description="You are not alone. There are many resources available to help you."
            link="/destination-page-url" // TODO:Replace with the actual URL
            bg={false} // Card without background
            buttonStyle="no-bkg-btn"
            buttonText="Read more"
        
          />
          <ResourceCard
            image="Heal.jpg"
            title="Heal"
            description="Healing is a journey. Find a community of survivors and supporters to help you through this difficult time."
            link="/destination-page-url"
            bg={false} // Card without background
            buttonStyle="no-bkg-btn"
            buttonText="Read more"

          />
        </div>
      </div>

      <div className="text-section">
        <h1 className="p-5" style={{ backgroundColor: '#DDE8CF', fontFamily: "'Playfair Display', serif" }}>
          Almost half of all women and men in the US have experienced
          psychological aggression by an intimate partner in their lifetime.
        </h1>
        <div>WHO Logo</div>
      </div>

      <h2>Stories that inspire: Real life experiences of survivors</h2>

      <div className="resource-card-box">
        <ResourceCard
          image="Jamie's story.jpg"
          title="Jamies's Story"
          description="For years I thought I was losing my mind. My husband was always nice to me and doing thoughtful things for me, but then there were times he would subtly put me down and make me feel like I wasn’t worth anything."
          link="/destination-page-url"
          bg={false} // Card without background
          buttonStyle="read-more-btn"
          buttonText="Read more"
        />
        <ResourceCard
          image="Justine's story.jpg"
          title="Faith's Story"
          description=" I was being gaslit and love bombed but didn't know what that was. I knew that he was playing mind games with me but didn't understand why."
          link="/destination-page-url"
          bg={false} // Card without background
          buttonStyle="read-more-btn"
          buttonText="Read more"
        />
        <ResourceCard
          image="Kathleen's story.jpg"
          title="Sofia's Story"
          description="It happened so slowly, I didn&rsquo;t realize what was happening to me. It started as a friendship, then a forbidden love affair"
          link="/destination-page-url"
          bg={false} // Card without background
          buttonStyle="read-more-btn"
          buttonText="Read more"
        />
        <ResourceCard
          image="Khadijah's story.jpg"
          title="Natalia's Story"
          description="I sometimes find myself downplaying what happened. I feel the need to explain that I was emotionally/psychologically abused, but never physically."
          link="/destination-page-url"
          bg={false} // Card without background
          buttonStyle="read-more-btn"
          buttonText="Read more"
        />
      </div>
      
      <a className="btn btn-outline-dark btn-lg mb-5" href="#!" role="button">
        Get inspired
      </a>

      <div className="container pb-4" >
    <div className="row">
      <div className="col-md-7 " style={{ backgroundColor: '#FFAF5F' }}>
        <div className="text-left inspired">
          <h1 clasNames="text-dark mt-5" style={{ fontFamily: "'Playfair Display', serif" }}>
            We are women who are passionate about understanding and
            preventing psychological abuse. Together, we can make a real
            difference.
          </h1>
          <button className="green-btn">Volunteer</button>
        </div>
      </div>
      <div className="col-md-5 pl-0">
        <img src="Volunteer.jpg" alt="Your Image" className="img-fluid m-0 p-0" />
      </div>
    </div>
</div>



     <Footer />
    </>
  );
};

export default HomePage;
