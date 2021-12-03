import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthService from "./service/auth_service";
import CardData from "./service/card_data";
import firebaseApp from "./service/firebase";

const authService = new AuthService(firebaseApp);
const cardData = new CardData(firebaseApp);
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} cardData={cardData} />
  </React.StrictMode>,
  document.getElementById("root")
);
