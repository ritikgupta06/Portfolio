import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Landing/Home.jsx';
import Connect from './Components/Connect.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/connect' element={<Connect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
