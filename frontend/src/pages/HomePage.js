import Hero from "../components/Hero";
import ResourceCard from "../components/shared/ResourceCard";
import Button from "../components/shared/Button";
import { Navbar } from "../components/Navbar";
import "../App.css";

const HomePage = () => {
  return (
    <>
      <div
        className="container-fluid bg-image d-flex flex-column"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/3-women-sitting-on-bench-near-the-flowers-GobsYxc_H_0')",
          height: "600px",
          alignContent: "center",
          alignSelf: "center",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "sepia(33%)",
        }}
      >
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <a
              class="navbar-brand d-flex flex-column fw-bold"
              href="#"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="mb-n1">When Women</span>
              <span>Understand</span>
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link disabled"
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
        <div class="d-flex h-100">
          <div
            class="text-white text-start pb-5 ps-5 mb-5 grid row-gap-3"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            <div className="hero-text mb-3 pb-3">
              <h1
                class="py-2 mb-3 display-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                We are silencing abuse
              </h1>
              <div class="py-2 fs-5">
                Let's put an end to psychlogical abuse together
              </div>
            </div>

            <a class="btn btn-outline-light btn-lg" href="#!" role="button">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="middle-content">
        <h3>We are here to put an end to psychological abuse</h3>

        <div className="resource-card-box">
          <ResourceCard
            image="path-to-image1.jpg"
            title="Learn"
            description="Being able to identify that there is an issue is an important first step. Learn more about psychological abuse and how to identify it."
            link="/destination-page-url" // TODO:Replace with the actual URL
            bg={true} // Card with background
            buttonStyle="learn-more-btn"
            buttonText="Learn More"
          />
          <ResourceCard
            image="path-to-image2.jpg"
            title="Resources"
            description="Need help? We have a list of resources to help you get started."
            link="/destination-page-url" // TODO:Replace with the actual URL
            bg={true} // Card with background
            buttonStyle="learn-more-btn"
            buttonText="Learn More"
          />
          <ResourceCard
            image="path-to-image3.jpg"
            title="Community"
            description="Knowing that you are not alone in this journey is the first step to healing. Find a community of survivors and supporters to help you through this difficult time."
            link="/destination-page-url" // TODO:Replace with the actual URL
            bg={true} // Card with background
            buttonStyle="learn-more-btn"
            buttonText="Learn More"
          />
        </div>

        <h3>
          Finding Strength in Support: Your Guide to Seeking Help and Healing
          from Psychological Abuse
        </h3>

        <div className="resource-card-box">
          <ResourceCard
            image="orange-circle.png"
            title="Identify the abuse"
            description="Description for Card 4"
            // link="/destination-page-url" // TODO:Replace with the actual URL
            bg={false} // Card without background
            

        
          />
          <ResourceCard
            image="orange-circle.png"
            title="Get help"
            description="Description for Card 5"
            link="/destination-page-url" // TODO:Replace with the actual URL
            bg={false} // Card without background
            buttonStyle="learn-more-btn"
          />
          <ResourceCard
            image="orange-circle.png"
            title="Support"
            description="Description for Card 6"
            link="/destination-page-url"
            bg={false} // Card without background
          />
        </div>
      </div>

      <div className="text-section">
        <h1>
          Almost half of all women and men in the US have experienced
          psychological aggression by an intimate partner in their lifetime.
        </h1>
        <div>WHO Logo</div>
      </div>

      <h2>Stories that inspire: Real life experiences of survivors</h2>

      <div className="resource-card-box">
        <ResourceCard
          image=""
          title="Jamies's Story"
          description="For years I thought I was losing my mind. My husband was always nice to me and doing thoughtful things for me, but then there were times he would subtly put me down and make me feel like I wasn’t worth anything."
          link="/destination-page-url"
          bg={false} // Card without background
          buttonStyle="read-more-btn"
          buttonText="Read more"
        />
        <ResourceCard
          image=""
          title="Faith's Story"
          description=" I was being gaslit and love bombed but didn't know what that was. I knew that he was playing mind games with me but didn't understand why."
          link="/destination-page-url"
          bg={false} // Card without background
          buttonStyle="read-more-btn"
          buttonText="Read more"
        />
        <ResourceCard
          image=""
          title="Sofia's Story"
          description="It happened so slowly, I didn&rsquo;t realize what was happening to me. It started as a friendship, then a forbidden love affair"
          link="/destination-page-url"
          bg={false} // Card without background
          buttonStyle="read-more-btn"
          buttonText="Read more"
        />
        <ResourceCard
          image=""
          title="Natalia's Story"
          description="I sometimes find myself downplaying what happened. I feel the need to explain that I was emotionally/psychologically abused, but never physically."
          link="/destination-page-url"
          bg={false} // Card without background
          buttonStyle="read-more-btn"
          buttonText="Read more"
        />
      </div>
      <a class="btn btn-outline-dark btn-lg" href="#!" role="button">
        Get inspired
      </a>

      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="text-left inspired">
              <h3>
                We are women who are passionate about understanding and
                preventing psychological abuse. Together, we can make a real
                difference.
              </h3>
              <button className="green-btn">Volunteer</button>
            </div>
          </div>
          <div className="col-md-5">
            <img src="your-image.jpg" alt="Your Image" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="text-section">
        <div className="text-section">
          <h2>Lorem</h2>
          <Button />
        </div>
        <div>Image</div>

        <div>Footer</div>
      </div>
    </>
  );
};

export default HomePage;
