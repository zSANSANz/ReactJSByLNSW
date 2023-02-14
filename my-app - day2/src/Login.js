import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const handleSubmit = (e) => {
        if(!email.includes('@')) {
            alert('Format email salah')
        } else {
            localStorage.setItem('isLogin', 'true')
            navigate('/home')
        }
    }
    return(
        <div className='login-border'>
        <h1>Belajar Halaman Login</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <h1>
                    Login
                </h1>
                <input
                    placeholder='Input your email'
                    className='margin-left15'
                    type={'email'}
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}
                />
                <button
                    disabled={email.length <= 4 || !email.includes('@') || email.includes('2') || !email.includes('.com')}
                    className='margin-left15'
                    type='submit'
                >
                    Login
                </button>
            </div>
        </form>
        </div>
    )
}

export default Login;
