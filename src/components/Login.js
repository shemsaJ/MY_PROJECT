// src/components/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../slices/authSlice';
import { useHistory } from 'react-router-dom';
import './Login.css'; // Import your CSS for styling

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login({ username, password }));
      history.push('/dashboard'); // Redirect to dashboard after successful login
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <div className="register-link">
          Don't have an account? <a href="/register">Register here</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
