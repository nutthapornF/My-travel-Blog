import styled from "@emotion/styled";
import "./footer.css";
// import "../../App.css";
import "../../App.css";
import Email from "../../img/orangeEmail.png";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="leftWrap">
        <div className="logowrap">
          <h1> NIKKI F</h1>
        </div>
        <div className="LogoTextwrap">Make holiday planning easier</div>
      </div>
      <div className="rightWrap">
        <img className="emailImg" src={Email} width="35px" />
        <p className="email">Nuttha.fu@outlook.com</p>
      </div>

      {/* <div>
        <br />
        <a href="https://www.instagram.com/wonderer.nn/">
          {" "}
          <Img src={IG} width="30px" />{" "}
        </a>
      </div> */}
    </div>
  );
};

export default Footer;

// const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-around;

//   height: 80px;
//   background-color: black;
//   color: #cc6600;
//   @media (max-width: 600px) {
//     padding: 0 15px 0 15px;
//     justify-content: space-between;
//   }
// `;
// const Img = styled.img`
//   padding-top: 15px;
//   padding-right: 20px;
//   @media (max-width: 600px) {
//     width: 35px;
//     height: 35px;
//     padding-right: 10px;
//   }
// `;
// const P = styled.p`
//   padding-top: 16px;
//   font-size: 15px;
//   @media (max-width: 600px) {
//     padding-top: 10px;
//     font-size: 13px;
//     line-height: 30px;
//   }
// `;

// const H1 = styled.h1`
//   color: white;
//   padding-right: 25px;
//   font-size: 25px;
//   @media (max-width: 600px) {
//     font-size: 18px;
//     padding-right: 20;
//   }
// `;
// const Logowrap = styled.div`
//   border-right: solid white 4px;
// `;

// const LogoTextwrap = styled.div`
//   font-size: 15px;
//   color: white;
//   padding-left: 20px;
//   padding-top: 10px;
//   @media (max-width: 520px) {
//     display: none;
//     font-size: 12px;
//     padding-left: 10px;
//   }
// `;
// const LeftWrap = styled.div`
//   display: flex;
// `;
