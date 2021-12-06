import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ImageFile from "./components/home/card_image/ImageFile";
import AuthService from "./service/auth_service";
import CardData from "./service/card_data";
import firebaseApp from "./service/firebase";
import UploadImage from "./service/upload_image";

const authService = new AuthService(firebaseApp);
const cardData = new CardData(firebaseApp);
const uploadImage = new UploadImage();
const FileInput = (props) => <ImageFile {...props} uploadImage={uploadImage} />;

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} cardData={cardData} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById("root")
);
