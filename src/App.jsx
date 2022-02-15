import React from "react";
import Login from "./components/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";

function App({ FileInput, authService, cardData }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route
            path="/main"
            element={
              <Home
                FileInput={FileInput}
                authService={authService}
                cardData={cardData}
              />
            }
            exact
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
