import styled from "@emotion/styled";
import "../styledPage.css";
// import Img from "../img/LandingPageBG.jpg";
import Img from "../../img/LandingPageBG.jpg";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="mainLoginWrap">
      <div className="contentWrapper">
        <div className="loginFormWrapper">
          <form className="loginForm">
            <label className="loginLabel">
              email <br />
              <input className="loginInput" type="email" />
            </label>
            <label className="loginLabel">
              password <br />
              <input className="loginInput" type="password" />
            </label>
            <button type="submit" className="submitBtn">
              {" "}
              login
            </button>
          </form>
          <div className="loginRightWrap">
            <img className="rightImg" src={Img} />
          </div>
        </div>
      </div>
      <button className="register" onClick={() => navigate("/register")}>
        register
      </button>
    </div>
  );
}
