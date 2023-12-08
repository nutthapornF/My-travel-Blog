import styled from "@emotion/styled";
import "./landingPage.css";
import "../../App.css";
import BGIMG from "../../img/LandingPageBG.jpg";
import CenterImg from "../../img/centerImg.jpg";
import freeDiving from "../../img/freediving.JPG";

import IG from "../../img/instagram.png";
import GitHub from "../../img/gitHub.png";
import Navigate from "../../components/Navigation/Navigate";
import myPic from "../../img/Me.jpg";
import Blogs from "../../components/BlogPost/BlogsPost";
import HorizontalCard from "../../components/BlogPost/HorizontalCard";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

const LandingPage = () => {
  const [destinationGet, setDestinationGet] = useState([]);
  /*   const [searchTerm, setSearchTerm] = useState(""); */
  //have to fix to limit ampunt GET
  const url = "http://localhost:4000/destination/limit";
  const getDestination = async () => {
    try {
      const results = await axios.get(url);
      //ต้อง  reverse data เพื่อให้แสดงใบสมัครล่าสุดจากใหม่ -> เก่า
      setDestinationGet(results.data.data);
    } catch (error) {
      console.log(error);
    }
    return {
      destinationGet,
    };
  };
  useEffect(() => {
    getDestination();
  }, []);
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
      {/* <div className="BlogWrapper">
        <div className="blogsWrap">
          {destinationGet?.map((places) => {
            return (
              <Blogs
                key={places._id}
                id={places._id}
                titleImg={places.images[0].url}
                topic={places.topic}
                credit={places.credit}
                tags={places.tags}
                content1={places.content1}
              />
            );
          })}
        </div>
      </div> */}
      {/* <div className="navBtn">
        <a href="/seeAlldestinations">See all Destinations . . . </a>
      </div> */}
    </div>
  );
};

export default LandingPage;

// const BlogWrap = styled.div`
//   width: 100%;
//   display: inline-flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   padding: 20px;
//   background-color: #f5f5f5;
// `;
// const Wrapper = styled.div`
//   padding-bottom: 0px;
//   width: 100vw;
// `;

// const Banner = styled.div`
//   width: 100%;
//   height: 100vh;
// `;
// const H1 = styled.h1`
//   text-align: center;
//   font-size: 30px;
// `;

// const BannerBg = styled.img`
//   background-position: center;
//   width: 100%;
//   height: 100%;
//   background-repeat: no-repeat;
//   -webkit-background-size: cover;
//   background-size: cover;
//   object-fit: cover;
//   object-position: 10% 150%;
//   opacity: 0.5;
//   z-index: -1;
// `;
// const BannerTextWrapper = styled.div`
//   position: absolute;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   @media (max-width: 768px) {
//   }
// `;
// const Textcontainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-top: solid white 1px;
//   border-bottom: solid white 1px;
//   width: 500px;
//   background-color: rgb(200, 200, 200, 0.3);
//   border-radius: 15px;
//   @media (max-width: 768px) {
//     width: 350px;
//     padding: 20px;
//   }
//   @media (max-width: 600px) {
//     width: 300px;
//   }
// `;
// const BannerText = styled.h1`
//   font-size: 60px;
//   font-family: "Baskervville", serif;
//   color: white;
//   letter-spacing: 4px;
//   text-align: center;
//   @media (max-width: 768px) {
//     font-size: 40px;
//     font-weight: 600;
//   }
//   @media (max-width: 600px) {
//     font-size: 30px;
//   }
// `;

// const ZoneWrap = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   padding: 35px;
// `;
// const TextPart = styled.div`
//   width: 80%;
//   height: auto;
//   color: white;
// `;
// const P = styled.p`
//   font-size: 16px;
//   margin-top: 20px;
// `;

// const SocialLogos = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 25px;
// `;
// const LogoPicWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   padding: 30px;
// `;

// const SCLogo = styled.a`
//   padding: 20px;
// `;
// const Img = styled.img`
//   border-radius: 50%;
// `;

// const H6 = styled.h1`
//   text-align: center;
//   padding: 20px;
//   font-family: "Montserrat", san-sarif;
//   font-size: 15px;
//   background-color: #f5f5f5;
// `;
