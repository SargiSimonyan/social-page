import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import OpeningPage from './OpeningPage';
import Login from './Login';
import Singin from './Singin';
import Personal from './Personal';


function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<OpeningPage />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/login/singin" element={<Singin />} />
      <Route path="/personal" element={<Personal />} />
    </Routes>
  </Router>
  );
}

export default App;
