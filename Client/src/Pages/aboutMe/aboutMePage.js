import IG from "../../img/instagram.png";
import GitHub from "../../img/gitHub.png";
import myPic from "../../img/Me.jpg";
// import "../LandingPage/landingPage.css";
import "./aboutMe.css";

const AboutMePage = () => {
  return (
    <div className="ZoneWrap aboutZone" id="About">
      {/* <h1 className="H1 ABMH1">About Me</h1> */}
      <div className="TextPart">
        <div className="selfIntroWrap">
          <h1 className="introH1">Hi Everyone ! 👋 </h1>
          <h2>My name is Nikki</h2>

          <p>
            {" "}
            I often caught myself smiling when I look through my old photo of
            places that i've visted before. some great memories are automaticly
            kept in our mind and will always be remembered, but how about the
            other ?.{" "}
          </p>
          <p>
            {" "}
            that's why i start journalling my trips, hoping I can keep small
            details of the moments so i can come back and read it when time has
            passed{" "}
          </p>
          <br />
          <p>
            I am from and live in Bangkok, Thailand. although I love to stay in
            but going to out to see the wolrd is not such a bad idea{" "}
          </p>
          {/* <p className="seltIntroduction">

            <br />
            
 
            Hi, I'm Nikki. I am a Junior web developer . I created this website
            because .. well I needed my own project and I have decided that it
            was time to blog about places that I've visited, in my point of view
            of course. I hope my blog make planing for your holiday easier !
            <br />
            <br />
            In the future I'll have my Blog in both English and Thai ( will be
            release in v.2.0 )
          </p> */}
        </div>

        <div className="SocialLogos social">
          <div className="LogoPicWrapper">
            <a href="https://www.instagram.com/wonderer.nn/">
              <img src={IG} width="70px" />
            </a>
            <a href="https://github.com/nutthapornF">
              <img src={GitHub} width="70px" />
            </a>
          </div>

          <div>
            <img className="Img" src={myPic} width="250px" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMePage;
