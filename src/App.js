import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Login';
import Personal from './Personal';

function App() {
  // const[activeUserId, setActiveUserId] = useState(0)
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/personal" element={<Personal />} />
    </Routes>
  </Router>
  );
}

export default App;
