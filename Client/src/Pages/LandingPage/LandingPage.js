import styled from "@emotion/styled";
import "./landingPage.css";
import "../../App.css";
import BGIMG from "../../img/LandingPageBG.jpg";
import CenterImg from "../../img/centerImg.jpg";
import freeDiving from "../../img/freediving.JPG";

import IG from "../../img/instagram.png";
import GitHub from "../../img/gitHub.png";
import myPic from "../../img/Me.jpg";

import HorizontalCard from "../../components/BlogPost/HorizontalCard";
import { useContext, useState, useEffect } from "react";
import { useFetch } from "../../UseFetch/useFetch";
import axios from "axios";

const LandingPage = () => {
  const [destinationGet, setDestinationGet] = useState([]);

  const { loading, data } = useFetch("http://localhost:4000/destination/limit");

  useEffect(() => {
    if (loading) return;
    setDestinationGet(data[0].reverse());
  }, [data]);
  let date = Date();

  return (
    <div className="Wrapper">
      <div className="Banner banner-area" id="home">
        <div className="BannerTextWrapper">
          <div className="Textcontainer">
            <div className="date">
              <p className="dateTitle"> Date</p> {date.substring(0, 16)}
            </div>
            <h1 className="BannerText">
              Where To <br /> Next
            </h1>
          </div>
        </div>
        {/* <img className="BannerBg" src={BGIMG} /> */}
        <div className="bgWrapper">
          <img className="BannerBg" src={CenterImg} />
        </div>

        <div className="rightLanding">
          Hi, My name is Nikki. <br /> Thank you for visiting my journey !
          <img className="rigthImg" src={freeDiving} />
          <div className="igCredit">
            <img className="creditImg" src={CenterImg} />
            <a href="https://www.instagram.com/wonderer.nn/" className="igName">
              wonderer.nn
            </a>
          </div>
        </div>
      </div>

      {/* <div className="ZoneWrap aboutZone" id="About">
        <h1 className="H1 ABMH1">About Me</h1>
        <div className="TextPart">
          <div className="selfIntroWrap">
            <p className="seltIntroduction">
              <br />
              Hi, I'm Nikki. I am a Junior web developer . I created this
              website because .. well I needed my own project and I have decided
              that it was time to blog about places that I've visited, in my
              point of view of course. I hope my blog make planing for your
              holiday easier !
              <br />
              <br />
              In the future I'll have my Blog in both English and Thai ( will be
              release in v.2.0 )
            </p>
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
      </div> */}
      {/* <div className="img-section">
          <img src={myPic} width="240" alt="myPicture" className="myPic" />
        </div> */}
      {/* </div> */}

      <div className="editorPost">
        <h1 className="editorTopic">Editor's(me) Post</h1>
        <div className="wonderP">My Wonder Around</div>
      </div>
      <div className="horizonMainWrap" style={{ width: "100%" }}>
        {destinationGet?.map((places, i) => {
          // console.log(places);
          return <HorizontalCard key={i} place={places} />;
        })}
      </div>
    </div>
  );
};

export default LandingPage;
