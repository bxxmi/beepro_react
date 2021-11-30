import React from 'react';
import LoginHeader from './header/LoginHeader'
import LoginFooter from './footer/LoginFooter'

const Login = ({ authLogin }) => {
  const onLogin = (event) => {
    authLogin
      .login(event.currentTarget.textContent)
      .then(console.log);
  }

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