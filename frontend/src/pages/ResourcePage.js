import Hero from "../components/Hero";
import ResourceCard from "../components/shared/ResourceCard";
import Button from "../components/shared/Button";
import "../styles/ResourcePage.css";

const ResourcePage = () => {
  return (
    <div>
      <div className="container-fluid info">
        <h1 className="container text-center p-5">Knowledge Give You Power</h1>
        <h3 className="container text-center p-5">
          Understanding what you are dealing with can help you understand how to
          heal
        </h3>
      </div>

      
      <div className="container">
        <h2 className="container text-center pb-5">Signs of Psychological Abuse</h2>
        <p className="banner">
          Below is a list of common signs of psychological abuse. If you are
          experiencing any of these, you may be in an abusive relationship. You
          do not have to experience all of these to be in an abusive
          relationship. If you are experiencing any of these, please reach out
          to a trusted friend, family member, or professional. You are not
          alone.
        </p>
        <div className="sign-section">
          <div className="row">
          <div className="col-md-6">
          <ul>
            <li> Your partner name calls you or demeans you.</li>
            <li> Your partner tries to control you, your time, and your actions.</li>
            <li>Your partner overloads you with compliments and gifts, and then uses that to manipulate you later (love bombing)</li>  
            <li> Your partner often makes you feel silly or dumb</li>
            <li> Your partner questions your reality and says that things that you know happened didn’t happen. This is called gaslighting</li>
            <li> Your partner is critical of your appearance</li>
            <li> Your partner is jealous of time spent with your friends or family</li>
            <li> Your partner punishes you by withholding attention or affection</li>
            <li> Your partner doesn’t want you hanging out with someone of another gender.</li>
            <li> Your partner makes threats to hurt you or others to get what they want</li>
            <li> Your partner wants you to ask for permission before doing something or spending time with other people.</li>
            </ul>
           </div>

           <div className="col-md-6">
           <ul>
            <li> Your partner monitors where you go and stalks your whereabouts</li>
            <li> Your partner doesn’t want you to work</li>
            <li> Your partner embarrasses you in public</li>
            <li>Your partner does not trust you and acts possessive </li>
            <li> Your partner threatens breaking up or divorce to manipulate an argument</li>
            <li>Your partner wants access to your phone, your passwords, or your social media </li>
            <li> Your partner threatens suicide during arguments.</li>
            <li> Your partner is constantly accusing you of cheating</li>
            <li> Your partner blames you for their unhealthy/abusive behaviors</li>
            <li>Your partner makes you feel guilty or immature for not wanting to have sex</li>
            <li> Your partner tells you what to do and what to wear </li>
          </ul>
          </div>

</div>
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

export default ResourcePage;
