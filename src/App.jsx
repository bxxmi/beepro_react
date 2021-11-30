import Login from './components/login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home'

export const session = sessionStorage.getItem('userInfo');

function App({ authService }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home authService={authService} />} exact />
          <Route path="/login" element={<Login authService={authService} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
