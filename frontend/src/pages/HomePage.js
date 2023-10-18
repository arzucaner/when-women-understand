import Hero from "../components/Hero";
import ResourceCard from "../components/shared/ResourceCard";
import Button from "../components/shared/Button";
import { Navbar } from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div>Image</div>
        <h1>We are silencing abuse</h1>
        <p>Let's put an end to psychlogical abuse together</p>
        <Button />
      </div>
      <div className="middle-content">
        <h3>We are here to put an end to psychological abuse</h3>
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <h4>
          Finding Strength in Support: Your Guide to Seeking Help and Healing
          from Psychological Abuse{" "}
        </h4>
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
      </div>
      <div className="container-fluid">
        <h1>"Loren"</h1>
        <div>WHO Logo</div>
      </div>
      <h2>
        Beyond the Shadows: Unveiling Personal Journeys of Survivors of
        Psychological Abuse
      </h2>
      <div>
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
      </div>
      <Button />
      <div className="container-fluid">
        <div className="text-section">
          <h2>Lorem</h2>
          <Button />
        </div>
        <div>Image</div>
        <div>Quiz</div>
        <div>Footer</div>
      </div>
    </>
  );
};

export default HomePage;
