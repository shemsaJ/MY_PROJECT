// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home'; // Replace with your actual home component
import PrivateRoute from './components/PrivateRoute'; // Assuming you have a PrivateRoute component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRoute component={Home} />} /> {/* Example private route */}
      </Routes>
    </Router>
  );
}

export default App;
