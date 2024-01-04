import styled from "@emotion/styled";
import "../styledPage.css";
// import Img from "../img/LandingPageBG.jpg";
import Img from "../../img/LandingPageBG.jpg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { useState } from "react";

export default function LoginPage() {
  const [userDataata, setUserData] = useState({ email: "", password: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ email, password });
    navigate("/destination/create");
    console.log("you have logged in");
  };

  return (
    <div className="mainLoginWrap">
      <div className="contentWrapper">
        <div className="loginFormWrapper">
          <form className="loginForm" onSubmit={handleSubmit}>
            <label className="loginLabel">
              email <br />
              <input
                className="loginInput"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="loginLabel">
              password <br />
              <input
                className="loginInput"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
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
      {/* <button className="register" onClick={() => navigate("/register")}>
        register
      </button> */}
    </div>
  );
}
