import Login from "./components/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";

function App({ authService, cardData }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home authService={authService} cardData={cardData} />}
            exact
          />
          <Route path="/login" element={<Login authService={authService} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
