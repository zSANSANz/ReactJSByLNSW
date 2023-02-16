import './App.css';
import React from "react";
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><Link to='/'>Login</Link></li>
                    <li><Link to='/logout'>Logout</Link></li>
                    <li><Link to='/get-data'>getData</Link></li>
                    <li><Link to='/post-data'>postdata</Link></li>
                    <li><Link to='/put-data'>putdata</Link></li>
                    <li><Link to='/delete-data'>deldata</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;
