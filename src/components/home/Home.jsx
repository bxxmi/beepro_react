import React from 'react';
import { useNavigate } from 'react-router';
import { useEffect } from 'react/cjs/react.development';

const Home = ({ authService }) => {
  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  }

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        navigate('/login');
      }
    })
  })

  return (
    <div>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Home;