import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";

export const AuthContext = React.createContext();
function AuthProvider(props) {
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

  //...
  return (
    <AuthContext.Provider
      value={{
        register,
        isAuthenticated,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
