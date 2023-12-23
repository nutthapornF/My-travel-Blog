import "../styledPage.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// import Img from "../img/LandingPageBG.jpg";
import Img from "../../img/LandingPageBG.jpg";
import { useAuth } from "../../context/AuthProvider";

export default function RegistPage() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      userInfo.email == "" ||
      userInfo.password == "" ||
      userInfo.first_name == "" ||
      userInfo.last_name == ""
    ) {
      //// have to do something about this
      console.log("all in put is required");
    }
    // const formData = new FormData();
    // formData.append("email", JSON.stringify(userInfo.email));
    // formData.append("password", JSON.stringify(userInfo.password));
    // formData.append("first_name", JSON.stringify(userInfo.first_name));
    // formData.append("last_name", JSON.stringify(userInfo.last_name));
    // console.log(userInfo);
    // console.log("formData", formData);

    register(userInfo);
    console.log("submitted");
  };

  return (
    <div className="mainLoginWrap">
      <div className="contentWrapper">
        <div className="loginFormWrapper">
          <form className="registForm" onSubmit={handleSubmit}>
            <label className="registLabel">
              Email <br />
              <input
                className="registInput"
                type="email"
                onChange={(e) => (userInfo.email = e.target.value)}
              />
            </label>
            <label className="registLabel">
              Password <br />
              <input
                className="registInput"
                type="password"
                onChange={(e) => (userInfo.password = e.target.value)}
              />
            </label>
            <label className="registLabel">
              First Name <br />
              <input
                className="registInput"
                type="password"
                onChange={(e) => (userInfo.first_name = e.target.value)}
              />
            </label>
            <label className="registLabel">
              Last Name <br />
              <input
                className="registInput"
                type="password"
                onChange={(e) => (userInfo.last_name = e.target.value)}
              />
            </label>
            <button type="submit" className="submitBtn">
              {" "}
              Register
            </button>
          </form>
          <div className="loginRightWrap">
            <img className="rightImg" src={Img} />
          </div>
        </div>
      </div>
    </div>
  );
}
