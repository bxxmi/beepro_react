import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthService from "./service/auth_service";
import app from "./service/firebase";

const authService = new AuthService(app);
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById("root")
);
