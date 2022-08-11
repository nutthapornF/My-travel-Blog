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
        <P>E-mail: Nuttha.fu@outlook.com | LineID : nickinickaa</P>
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
`;
const Img = styled.img`
  padding-top: 15px;
  padding-right: 20px;
`;
const P = styled.p`
  padding-top: 16px;
  font-size: 15px;
`;

const H1 = styled.h1`
  color: white;
  padding-right: 25px;
  font-size: 25px;
`;
const Logowrap = styled.div`
  border-right: solid white 4px;
`;

const LogoTextwrap = styled.div`
  font-size: 15px;
  color: white;
  padding-left: 20px;
  padding-top: 10px;
`;
const LeftWrap = styled.div`
  display: flex;
`;
