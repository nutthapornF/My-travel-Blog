import "../styledPage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// import Img from "../img/LandingPageBG.jpg";
import Img from "../../img/LandingPageBG.jpg";
export default function RegistPage() {
  const [userInfo, setUserInfo] = useState({
    email: "email",
    password: "password",
    first_name: "first_name",
    last_name: "last_name",
  });
  const navigate = useNavigate();

  const createUser = async (data) => {
    await axios.post("http://localhost:4000/auth/regist", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("email", JSON.stringify(userInfo.email));
    formData.append("password", JSON.stringify(userInfo.password));
    formData.append("first_name", JSON.stringify(userInfo.first_name));
    formData.append("last_name", JSON.stringify(userInfo.last_name));
    console.log(userInfo);
    createUser(formData);
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
