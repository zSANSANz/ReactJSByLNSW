import Navigation from "./Navigation";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import './App.css';

function PostData() {
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
        axios.post('https://dummyjson.com/products/add', {
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
            <h1>Sample Get Data</h1>
            <form>
                <input 
                    type='text'
                    name={'title'}
                    value={post.title}
                    onChange={handleChange}
                />
            </form>
            <button onClick={() => handleSubmit()}>POST</button>
        </div>
    )
}





export default PostData