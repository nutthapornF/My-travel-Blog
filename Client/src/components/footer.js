import styled from "@emotion/styled";
import "../App.css";
import Email from "../img/orangeEmail.png";

const Footer = () => {
  return (
    <Wrapper>
      <LeftWrap>
        <Logowrap>
          <H1> NIKKI F</H1>
        </Logowrap>
        <LogoTextwrap>Make holiday planning easier</LogoTextwrap>
      </LeftWrap>
      <LeftWrap>
        <Img src={Email} width="45px" />
        <P>Nuttha.fu@outlook.com</P>
      </LeftWrap>

      {/* <div>
        <br />
        <a href="https://www.instagram.com/wonderer.nn/">
          {" "}
          <Img src={IG} width="30px" />{" "}
        </a>
      </div> */}
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 80px;
  background-color: black;
  color: #cc6600;
  @media (max-width: 425px) {
    padding: 0 15px 0 15px;
    justify-content: space-between;
  }
`;
const Img = styled.img`
  padding-top: 15px;
  padding-right: 20px;
  @media (max-width: 425px) {
    width: 35px;
    height: 35px;
    padding-right: 10px;
  }
`;
const P = styled.p`
  padding-top: 16px;
  font-size: 15px;
  @media (max-width: 425px) {
    padding-top: 10px;
    font-size: 13px;
    line-height: 30px;
  }
`;

const H1 = styled.h1`
  color: white;
  padding-right: 25px;
  font-size: 25px;
  @media (max-width: 425px) {
    font-size: 18px;
    padding-right: 20;
  }
`;
const Logowrap = styled.div`
  border-right: solid white 4px;
`;

const LogoTextwrap = styled.div`
  font-size: 15px;
  color: white;
  padding-left: 20px;
  padding-top: 10px;
  @media (max-width: 425px) {
    display: none;
    font-size: 12px;
    padding-left: 10px;
  }
`;
const LeftWrap = styled.div`
  display: flex;
`;
