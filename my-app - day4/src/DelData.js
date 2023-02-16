import Navigation from "./Navigation";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import './App.css';

function DelData() {
    const [post, setpost] = useState({title:''})

    const handleChange = (e) => {
        setpost({
            ...post,
            [e.target.name]: e.target.value
        })
        console.log(post)
    }

    const handleSubmit = () => {
        console.log("tes");
        const id = 1
        axios.delete(`https://dummyjson.com/products/${id}`, {
            body: JSON.stringify({
                title: post.title,
            })
        })
        .then((res) => console.log(res))
        .catch((e) => console.log(e))
    }

    return (
        <div>
            <Navigation />
            <h1>Delete Data</h1>
            <form>
                <input 
                    type='text'
                    name={'title'}
                    value={post.title}
                    onChange={handleChange}
                />
            </form>
            <button onClick={() => handleSubmit()}>Put</button>
        </div>
    )
}

export default DelData