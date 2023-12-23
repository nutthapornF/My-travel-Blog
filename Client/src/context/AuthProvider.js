import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = React.createContext();
function AuthProvider(props) {
  const [state, setState] = useState({
    loading: null,
    error: null,
    user: null,
  });
  //...
  const isAuthenticated = Boolean(localStorage.getItem("token"));
  //   const navigate = useNavigate();

  const register = async (data) => {
    console.log(" before init ...");

    await axios.post(
      "http://localhost:4000/auth/regist",
      data
      // , {
      //   headers: { "Content-Type": "multipart/form-data" },
      // }
    );

    // navigate("/auth/login");
  };

  const login = async (data) => {
    try {
      const result = await axios.post("http://localhost:4000/auth/login", data);
      const token = result.data.token;
      localStorage.setItem("token", token);

      const userDataFromToken = jwtDecode(token);
      setState({ ...state, user: userDataFromToken });
      //   navigate("/destination/create");
      console.log(token, "token");
      console.log(userDataFromToken);
      //   localStorage.setItem("token", token);
    } catch (err) {
      console.log(err);
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    setState({ ...state, user: null });
  };
  // เอาไปฝช้ <button
  //   onClick={() => {
  //     logout();
  //   }}
  // >
  //   Logout
  // </button>

  //...
  return (
    <AuthContext.Provider
      value={{
        register,
        isAuthenticated,
        login,
        logout,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
