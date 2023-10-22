import Hero from "../components/Hero";
import { Navbar } from "../components/Navbar";
import ResourceCard from "../components/shared/ResourceCard";
import Button from "../components/shared/Button";

const LandingPage = () => {
  return ( 
    <div>
      <Navbar />
      <div className="container-fluid info">
        <h1>Welcome to Our</h1>
        <h1>Supportive Communities</h1>
        <p>Join Our Community: Support, Learn, Grow. Explore support groups,</p>
        <p>
          volunteer roles, and local resources - Together, we can create change.
        </p>
        <Button />
      </div>
      <div className="page-content">
        <h2 className="">Survivor Stories</h2>
        <h4>Empowering Survivor Narratives: Real Voices, Real Stories</h4>
        <div className="hero-section">
          <Hero />
          <h4>Behind every survivor is a story of strength</h4>
          <p>
            In this section, survivors share their experiences and stories of
            resilience.
          </p>
        </div>
        <h2>Find Your Tribe</h2>
        <h4> 
          Discover a safe space to share experiences, connect with understanding
          peers, and learn essential coping strategies. In our support groups,
          you'll find your tribe and a nurturing environment for healing.
        </h4>
        <div className="resource-section">
          <ResourceCard />
          <ResourceCard />
          <ResourceCard />
          <ResourceCard />
        </div>
      </div>
      <Button />
      <Hero />
      <h2>Finding Help Nearby</h2>
      <h4>
        Find shelters, helplines, and nearby assistance. We're here to connect
        with you with the help you need.
      </h4>
      <div className="search-bar"></div>
      <div className="links-section"></div>
      <div className="footer"></div>
    </div>
  );
};

export default LandingPage;
