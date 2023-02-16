import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import Navigation from './Navigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        <Row>
          <Col md={3}>1</Col>
          <Col md={3}>2</Col>
          <Col md={3}>3</Col>
          <Col md={3}>4</Col>
        </Row>
    </div>
  )
}

export default Profile;
