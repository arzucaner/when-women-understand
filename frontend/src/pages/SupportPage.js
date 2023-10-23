import Hero from "../components/Hero";
import Button from "../components/shared/Button";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/SupportPage.css";

const SupportPage = () => {
  return (
    <>
      <Navbar />
      <div
        className="container-fluid bg-image d-flex flex-column"
        style={{
          backgroundImage: "",
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
            className=" text-start mt-5 pb-5 ps-5 mb-5 grid row-gap-3"
            style={{ color: "#213321", fontFamily: "'Roboto', sans-serif" }}
          >
            <div className="hero-text mb-3 pb-2 pt-5">
              <h1
                className="py-2 mb-3 display-1 support-title"
                id="hero-text"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Welcome to a supportive community
              </h1>
              <div className="py-2 fs-5 title-caption">
                Join our community: support, learn, grow. Explore support
                groups, volunteer roles and local resources- Together, we can
                create change.
              </div>
            </div>
            <button className="btn btn-outline-dark btn-lg mb-5" type="button">
              Explore popular discussions
            </button>
          </div>
        </div>
      </div>

      <div class="support-title">
        <h2>Featured Stories</h2>
      </div>


      
<div className="stories-container">
      <div className="container featured-story p-5 m-5">
        <div className="row">
          <div className="col-md-8">
            <div className="d-flex flex-column justify-content-between h-100">
              <div className="text-left">
                <p>
                “For years I thought I was losing my mind. My husband was always nice to me and doing thoughtful things for me, but then there were times he would subtly put me down and make me feel like I wasn’t worth anything. If I tried to bring up something he said to me and how it upset me, I was met with ‘You know I didn’t mean it that way’, ‘I NEVER said anything like that. Why would you think that I would say something like that?’, or ‘I think you are just being overly emotional and your depression/anxiety is making you feel that way’. Nothing was ever his fault, it was all mine. Even when I learned of an affair he had, it was my fault because I was neglecting him emotionally/sexually. Once I got free of the situation, I was able to see the control for what it was. I wasn’t losing my mind, I was just living with someone who tried to chip away my reality and personality.”
<br/>
<br/>
 Jamie
<br/>
              Survivor of Psychological Abuse 
 
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <img src="/Jamie's story.jpg" alt="featured story" />

          </div>
        </div>
      </div>

      <div className="container featured-story p-5 m-5">
        <div className="row">
        <div className="col-md-4">
            <img src="/Justine's story.jpg" alt="featured story" />
          </div>
          <div className="col-md-8">
            <div className="d-flex flex-column justify-content-between h-100">
              <div className="text-left">
                <p>
                "I didn't understand what was happening until I started googling my ex's bizarre behaviors and the subject of narcissism kept popping up. I was being gaslit and love bombed but didn't know what that was. I knew that he was playing mind games with me but didn't understand why. This all happened within the first year. Then there [were] the anger rages. That was another confusing behavior. After that I discovered the porn addiction and texting strange women. I was on and off for three years while trying to figure out what was happening and trying to make sense of it all. I was lucky the abuse never turned physical because I believe he was very capable of inflicting great harm. Then the discard begin. I finally ended it first and went 100% no contact because by then I had become educated on the subject."
                <br/>
<br/>
 Justine
<br/>
              Survivor of Psychological Abuse 
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="container featured-story p-5 m-5">
        <div className="row">
          <div className="col-md-8">
            <div className="d-flex flex-column justify-content-between h-100">
              <div className="text-left">
                <p>
                "It happened so slowly, I didn’t realize what was happening to me. It started as a friendship, then a forbidden love affair ( he was married) then as time went on, he would criticize me. Then discard me , drag me back in and repeat. He [said he] got a divorce ect ect. After 10 years of mental abuse, I could see I was disappearing as a person. That’s when I left... Been divorced 6 years. I’m staying single due to me enjoying the peace in my life now."
                <br/>
<br/>
 Kathleen
<br/>
              Survivor of Psychological Abuse 
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img src="/Kathleen's story.jpg" alt="featured story" />
          </div>
        </div>
      </div>

      <div className="container featured-story p-5 m-5">
        <div className="row">
        <div className="col-md-4">
            <img src="/Khadijah's story.jpg" alt="featured story" />
          </div>
          <div className="col-md-8">
            <div className="d-flex flex-column justify-content-between h-100">
              <div className="text-left">
                <p>
                “I sometimes find myself downplaying what happened. I feel the need to explain that I was emotionally/psychologically abused, but never physically. I am working on changing that narative in myself. Just because this type of abuse doesn’t leave a bruise doesn’t mean it didn’t leave a mark on me. Abuse of any form is wrong and just because you were not hit doesn’t mean you don’t have the right to step forward and speak your truth.”
                <br/>
<br/>
 Khadijah
<br/>
              Survivor of Psychological Abuse 
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      


</div>



      <div className="tribe text-center p-5">
        <div class="tribe-text-title">Find your tribe</div>
        <p className="tribe-caption">
          Discover a safe space to share experiences, connect with understanding
          peers, and learn essential coping strategies. In our support groups,
          you'll find your tribe and a nurturing environment for healing.
        </p>
      </div>

      {/* <div>
        <div class="row text-left">
          <div class="col-md-6 p-4 ">
            <div class="container support-box d-flex flex-column align-items-start">
              <div class="tribe-title d-flex ">
                <div class="circle mr-4"></div>
                <h5 class="inline-text ml-2">EmpowerHer circle</h5>
              </div>
              <p class="support-box-p">
                Find inspiration and healing as you bond with others who have
                faced similar challenges.
              </p>
              <div className="mt-auto">
                <a
                  href="https://nominetwork.org/empower-her-circle/"
                  target="_blank"
                >
                  <button className="no-bkg-btn join-btn">Join now</button>
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-6 p-4">
            <div class="container support-box d-flex flex-column align-items-start">
              <div class="tribe-title d-flex align-items-center">
                <div class="circle mr-4"></div>
                <h5 class="inline-text ml-2">CourageRise</h5>
              </div>
              <p class="support-box-p">
                Join our group for encouragement, coping strategies, and a
                network of strong individuals.
              </p>
              <a href="https://courageofcare.org/" target="_blank">
                <button className="no-bkg-btn join-btn">Join now</button>
              </a>
            </div>
          </div>

          <div class="col-md-6 p-4">
            <div class="container support-box d-flex flex-column align-items-start">
              <div class="tribe-title d-flex align-items-center">
                <div class="circle mr-4"></div>
                <h5 class="inline-text ml-2">Hope haven</h5>
              </div>
              <p class="support-box-p">
                A welcoming space to exchange experiences and embrace the path
                to recovery together.
              </p>
              <a href="https://www.hopehaven.org/" target="_blank">
                <button className="no-bkg-btn join-btn">Join now</button>
              </a>
            </div>
          </div>

          <div class="col-md-6 p-4">
            <div class="container support-box d-flex flex-column align-items-start">
              <div class="tribe-title d-flex align-items-center">
                <div class="circle mr-4"></div>
                <h5 class="inline-text ml-2">Resilience Allies</h5>
              </div>
              <p class="support-box-p">
                Find inspiration and healing as you bond with others who have
                faced similar challenges.
              </p>
              <a href="https://www.resalliance.org/" target="_blank">
                <button className="no-bkg-btn join-btn">Join now</button>
              </a>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container-fluid text-center p-5">
        <button className="btn btn-outline-dark btn-lg mb-5" type="button">
          Start a discussion
        </button>
      </div>

      <div class="give-back-container text-center">
  <h2 className="give-back-title">Give back make an impact</h2>
  <p className="give-back-text">Make a meaningful impact by moderating groups, organizing events, and more. Your support matters.</p>
  <button className="give-back-btn btn-outline-dark btn-lg mb-5" type="button">Become a volunteer</button>
</div>


      
      <Footer />
    </>
  );
};

export default SupportPage;
