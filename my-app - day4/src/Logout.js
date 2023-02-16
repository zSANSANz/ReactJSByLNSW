import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';

function Logout () {
    const [trigger, setTrigger] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        console.log('Page dimuat, fungsi berjalan')
        localStorage.removeItem('isLogin')
        localStorage.removeItem('email')
        navigate('/')
    }, [trigger])

    return(
        <div>
            <h1>Logout</h1>
            <button onClick={() => setTrigger(trigger+1)}>trigger</button>
        </div>
        
    )
}

export default Logout;
