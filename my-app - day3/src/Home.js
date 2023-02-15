import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';

const dataObject = {
  id: 1,
  nama: 'Inu',
  alamat: 'Pramuka',
  ruang: 3,
  nilai: 10
}

const Home = () => {
  return(
    <div>
        <h1>Home</h1>
        <nav>
            <ul>
              <li><Link to='/home'>Home</Link></li>
              <li><Link to='/profile'>Profile</Link></li>
              <li><Link to='/'>Login</Link></li>
              <li><Link to='/logout'>Logout</Link></li>
            </ul>
        </nav>
        <h1>Halo, {dataObject.nama}</h1>
        <h2>Ruang, {dataObject.ruang}</h2>
    </div>
  )
}

export default Home;
