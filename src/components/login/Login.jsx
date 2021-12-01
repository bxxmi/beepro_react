import React, { useEffect } from 'react';
import LoginHeader from './header/LoginHeader'
import LoginFooter from './footer/LoginFooter'
import { useNavigate } from 'react-router-dom';

const Login = ({ authService }) => {
  const navigate = useNavigate();

  const goHome = (userInfo) => {
    navigate('/', {
      state: userInfo
    });
  };

  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent)
      .then(response => goHome(JSON.stringify(response)));
  }

  useEffect(() => {
    authService
      .onAuthChange(user => {
        user && goHome(user);
    });
  })

  return ( 
    <section>
      <LoginHeader />
        <section>
          <button onClick={onLogin}>Google</button>
          <button onClick={onLogin}>Github</button>
        </section>
      <LoginFooter />
    </section>
  );
};

export default Login;