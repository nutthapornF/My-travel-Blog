import styled from "@emotion/styled";
import "../App.css";
import BGIMG from "../img/LandingPageBG.jpg";
import IG from "../img/instagram.png";
import GitHub from "../img/gitHub.png";
import Navigate from "./Navigate";
import myPic from "../img/Me.jpg";
import Blogs from "./BlogsPost";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

const LandingPage = () => {
  const [destinationGet, setDestinationGet] = useState([]);
  /*   const [searchTerm, setSearchTerm] = useState(""); */
  //have to fix to limit ampunt GET
  const url = "http://localhost:4000/destination";
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
  return (
    <Wrapper>
      <Navigate />

      <div className="banner-area" id="home">
        <BannerBg src={BGIMG} />
        <BannerTextWrapper>
          <BannerText>
            Desire <br /> destination
          </BannerText>
        </BannerTextWrapper>
      </div>

      <ZoneWrap className="about-area ABM" id="About">
        <TextPart className="text-part ">
          <H1>About Me</H1>
          <div>
            <P>
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
            </P>
          </div>

          <SocialLogos className="social">
            <LogoPicWrapper>
              <a href="https://www.instagram.com/wonderer.nn/">
                <img src={IG} width="70px" />
              </a>
              <a href="https://github.com/nutthapornF">
                <img src={GitHub} width="70px" />
              </a>
            </LogoPicWrapper>

            <div>
              <Img src={myPic} width="250px" />
            </div>
          </SocialLogos>
        </TextPart>
        {/* <div className="img-section">
          <img src={myPic} width="240" alt="myPicture" className="myPic" />
        </div> */}
      </ZoneWrap>

      <BlogWrap>
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
      </BlogWrap>
      <H6>
        <a href="/seeAlldestinations">See all Destinations . . . </a>
      </H6>
    </Wrapper>
  );
};

export default LandingPage;

const BlogWrap = styled.div`
  display: inline-flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  background-color: #f5f5f5;
`;
const Wrapper = styled.div`
  padding-bottom: 0px;
  width: 100%;
`;
const H1 = styled.h1`
  text-align: center;
  font-size: 30px;
`;

const BannerBg = styled.img`
  background-position: center;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  z-index: -1;
`;
const BannerTextWrapper = styled.div`
  width: 520px;
  position: absolute;
  top: 250px;
  right: 80px;
  border-top: solid white 1px;
  border-bottom: solid white 1px;
  z-index: 0;
`;
const BannerText = styled.h1`
  font-size: 70px;
  font-family: "Baskervville", serif;
  color: white;
  letter-spacing: 4px;
  text-align: center;
`;

const ZoneWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 35px;
`;
const TextPart = styled.div`
  width: 80%;
  height: auto;
  color: white;
`;
const P = styled.p`
  font-size: 16px;
  margin-top: 20px;
`;

const SocialLogos = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;
const LogoPicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px;
`;

const SCLogo = styled.a`
  padding: 20px;
`;
const Img = styled.img`
  border-radius: 50%;
`;

const H6 = styled.h1`
  text-align: center;
  padding: 20px;
  font-family: "Montserrat", san-sarif;
  font-size: 15px;
  background-color: #f5f5f5;
`;
