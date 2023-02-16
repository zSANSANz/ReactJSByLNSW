import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import Navigation from './Navigation';

const Profile = () => {
    const navigate = useNavigate() 
    useEffect(() => {
        if (!localStorage.getItem('isLogin')) {
            navigate('/')
        }
    }, [])
  return(
    <div>
        <Navigation />
        <h1>Profile</h1>
        <h2>Halo, {localStorage.getItem('email')}</h2>
    </div>
  )
}

export default Profile;
