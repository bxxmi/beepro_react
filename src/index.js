import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthLogin from './service/auth_login'
import app from './service/firebase';

const authLogin = new AuthLogin(app);
ReactDOM.render(
  <React.StrictMode>
    <App authLogin={authLogin}/>
  </React.StrictMode>,
  document.getElementById('root')
);
