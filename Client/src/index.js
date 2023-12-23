import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { DestinationDataProvider } from "./context/DestinationData";
import { AuthProvider } from "./context/AuthProvider";
import jwtInterceptor from "./utils/jwtInterceptor";

jwtInterceptor();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DestinationDataProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </DestinationDataProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
