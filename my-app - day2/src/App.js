import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import Home from './Home';
import Logout from './Logout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/profile' exact element={<Profile />} />
          <Route path='/logout' exact element={<Logout />} />
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
