import Hero from "../components/Hero";
import ResourceCard from "../components/shared/ResourceCard";
import Button from "../components/shared/Button";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/IdentifyPage.css";

const ResourcePage = () => {
  return (
    <>
      <Navbar />
      <div>
        <div
          className="container-fluid bg-image d-flex flex-column"
          style={{
            backgroundImage: `linear-gradient(rgba(31, 59, 33, 0.5), rgba(31, 59, 33, 0.5)), url('/freedom.jpg')`,
            height: "600px",
            alignContent: "center",
            alignSelf: "center",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            filter: "sepia(33%)",
          }}
        >
          <div>
            <div className="container-fluid identify-top pt-5">
              <h1 className="container resource-header">Knowledge Gives</h1>
              <h1 className="container resource-header">You Power</h1>
              <h5 className="container">
                Understanding what you are dealing with <br /> can help you
                understand how to heal
              </h5>
            </div>
          </div>
        </div>

        <div className="awareness-section-1">
          <div className="info-box m-5">
            <div className="row">
              <div className="col-md-8">
                <div className="love-bombing">
                  <h1 className="identify-title p-2">Love Bombing</h1>
                  <p>
                    This is often portrayed in movies as romantic and loving.
                    How many movies have you seen where the woman wansn't
                    interested, but the man kept trying (while usually crossing
                    her boundaries of what she stated she wanted) and eventually
                    she falls in love with his? This unrealistic depiction of a
                    relationship is an example of love bombing. According to
                    Psychology Today, “love bombing is an attempt to influence
                    another person with over-the-top displays of attention and
                    affection.” This type of abuse is usually seen in the
                    beginning of a relationship, but it can still be experienced
                    through any stage of the relationship.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <img src="Understanding big.png" alt="love bombing" />
              </div>
            </div>
          </div>
          <div className="info-box m-5">
            <div className="row">
              <div className="col-md-8">
                <div className="gaslighting">
                  <h1 className="identify-title p-2">Gaslighting</h1>
                  <p>
                    The term comes from a 1938 stage play called Gas Light,
                    where a man tries to drive his wife crazy by continually
                    dimming the (gas) lights in their home. When his wife points
                    out the dimming lights, he denies their dimming. The wife
                    then starts to doubt her sanity and sense of reality because
                    of her husbands words. When a person is Gaslighting you,
                    this is a form of emotional abuse that brings into question
                    the validity of your instincts, feeling, and sanity. This
                    then allows your partner to have more power and control over
                    you. Once someone has broken down the ability of a person to
                    trust their own perceptions, they are more likely to stay in
                    an abusive relationship.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <img src="Deconstructing big.png" alt="gaslighting" />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid signs-of-abuse">
          <h1 className="text-center pb-5 resource-sub">
            Signs of Psychological Abuse
          </h1>
        </div>

        <div className="banner-container mb-4">
          <h4 className="banner">
            Below is a list of common signs of psychological abuse. If you are experiencing any of these, please reach out
            to a trusted friend, family member, or professional. You are not
            alone.
          </h4>
        </div>

        <div>
          <div className="container">
            <div className="sign-section m-0">
              <div className="row">
                <div className="col-md-6">
                  <ul>
                    <li> Your partner name calls you or demeans you.</li>
                    <li>
                      {" "}
                      Your partner tries to control you, your time, and your
                      actions.
                    </li>
                    <li>
                      Your partner overloads you with compliments and gifts, and
                      then uses that to manipulate you later (love bombing)
                    </li>
                    <li> Your partner often makes you feel silly or dumb</li>
                    <li>
                      {" "}
                      Your partner questions your reality and says that things
                      that you know happened didn’t happen. This is called
                      gaslighting
                    </li>
                    <li> Your partner is critical of your appearance</li>
                    <li>
                      {" "}
                      Your partner is jealous of time spent with your friends or
                      family
                    </li>
                    <li>
                      {" "}
                      Your partner punishes you by withholding attention or
                      affection
                    </li>
                    <li>
                      {" "}
                      Your partner doesn’t want you hanging out with someone of
                      another gender.
                    </li>
                    <li>
                      {" "}
                      Your partner makes threats to hurt you or others to get
                      what they want
                    </li>
                    <li>
                      {" "}
                      Your partner tells you what to do and what to wear{" "}
                    </li>
                  </ul>
                </div>

                <div className="col-md-6">
                  <ul>
                    <li>
                      {" "}
                      Your partner monitors where you go and stalks your
                      whereabouts
                    </li>
                    <li> Your partner doesn’t want you to work</li>
                    <li> Your partner embarrasses you in public</li>
                    <li>
                      Your partner does not trust you and acts possessive{" "}
                    </li>
                    <li>
                      {" "}
                      Your partner threatens breaking up or divorce to
                      manipulate an argument
                    </li>
                    <li>
                      Your partner wants access to your phone, your passwords,
                      or your social media{" "}
                    </li>
                    <li> Your partner threatens suicide during arguments.</li>
                    <li>
                      {" "}
                      Your partner is constantly accusing you of cheating
                    </li>
                    <li>
                      {" "}
                      Your partner blames you for their unhealthy/abusive
                      behaviors
                    </li>
                    <li>
                      Your partner makes you feel guilty or immature for not
                      wanting to have sex
                    </li>

                    <li>
                      {" "}
                      Your partner wants you to ask for permission before doing
                      something or spending time with other people.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Find Your Tribe</h2>
          <h4>
            Discover a safe space to share experiences, connect with
            understanding peers, and learn essential coping strategies. In our
            support groups, you'll find your tribe and a nurturing environment
            for healing.
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
        <Footer />
      </div>
    </>
  );
};

export default ResourcePage;
