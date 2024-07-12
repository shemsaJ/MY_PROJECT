import React from 'react';
import Login from '../components/Login';

const LoginPage = () => {
  const handleLogin = (username, password) => {
    // Perform login logic
    console.log(username, password);
  };

  return (
    <div>
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
