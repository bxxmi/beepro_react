import React, { useEffect } from 'react';
import LoginHeader from './header/LoginHeader'
import LoginFooter from './footer/LoginFooter'
import { useNavigate } from 'react-router-dom';

const Login = ({ authService }) => {
  const navigate = useNavigate();

  const goHome = (userId) => {
    navigate('/', {
      state: { id: userId }
    });
  };

  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent)
      .then(response => goHome(response.user.uid));
  }

  useEffect(() => {
    authService
      .onAuthChange(user => {
        user && goHome(user.uid);
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