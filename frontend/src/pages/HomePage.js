import ResourceCard from "../components/shared/ResourceCard";
import Button from "../components/shared/Button";
import { Navbar } from "../components/Navbar";
import "../App.css";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
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
        <div className="d-flex h-100">
          <div
            className="text-white text-start mt-5 pb-5 ps-5 mb-5 grid row-gap-3"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            <div className="hero-text mb-3 pb-2 pt-5">
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
            <Button
              title="Learn More"
              style="btn btn-outline-light"
              link="#!"
            />
          </div>
        </div>
      </div>

      <div className="middle-content">
        <h3
          className="text-center p-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          We are stronger when we stand together
        </h3>

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

        <h3 className="p-4" style={{ fontFamily: "'Playfair Display', serif" }}>
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
        <h1
          className="text-center p-5"
          style={{
            backgroundColor: "#DDE8CF",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Almost half of all women and men in the US have experienced
          psychological aggression by an intimate partner in their lifetime.
        </h1>
      </div>

      <h1
        className="text-center pt-4"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Stories that inspire: Real life experiences of survivors
      </h1>

      <div className="resource-card-box">
        <ResourceCard
          image="Jamie's story.jpg"
          title="Jamies's Story"
          description="For years I thought I was losing my mind. My husband was always nice to me and doing thoughtful things for me, but then there were times he would subtly put me down and make me feel like I wasn’t worth anything."
          link="/support"
          bg={false} // Card without background
          buttonStyle="read-more-btn"
          buttonText="Read more"
        />
        <ResourceCard
          image="Justine's story.jpg"
          title="Justine's Story"
          description=" I was being gaslit and love bombed but didn't know what that was. I knew that he was playing mind games with me but didn't understand why."
          link="/support"
          bg={false} // Card without background
          buttonStyle="read-more-btn"
          buttonText="Read more"
        />
        <ResourceCard
          image="Kathleen's story.jpg"
          title="Kathleen's Story"
          description="It happened so slowly, I didn&rsquo;t realize what was happening to me. It started as a friendship, then a forbidden love affair"
          link="/support"
          bg={false} // Card without background
          buttonStyle="read-more-btn"
          buttonText="Read more"
        />
        <ResourceCard
          image="Khadijah's story.jpg"
          title="Khadijah's Story"
          description="I sometimes find myself downplaying what happened. I feel the need to explain that I was emotionally/psychologically abused, but never physically."
          link="/support"
          bg={false} // Card without background
          buttonStyle="read-more-btn"
          buttonText="Read more"
        />
      </div>

      <div className="text-center">
        <button className="btn btn-outline-dark btn-lg mb-5" type="button">
          Get inspired
        </button>
      </div>

      <div className="container pb-4 text-center">
        <div className="row">
          <div className="col-md-7 " style={{ backgroundColor: "#FFAF5F" }}>
            <div className="text-left inspired p-5">
              <h1
                className="text-dark mt-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                We are women who are passionate about understanding and
                preventing psychological abuse. Together, we can make a real
                difference.
              </h1>
              <button className="green-btn">Volunteer</button>
            </div>
          </div>
          <div className="col-md-5 pl-0">
            <img
              src="Volunteer.jpg"
              alt="Your Image"
              className="img-fluid m-0 p-0"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
