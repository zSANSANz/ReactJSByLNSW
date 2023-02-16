import Navigation from "./Navigation";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import './App.css';

function GetData() {
    const [data, setData] = useState([])
    const fetchData = async () => {
        // const result = axios.get('https:/dummyjson.com/products')
        // console.log(result)
        await axios.get('https:/dummyjson.com/products')
            .then((result) => {
                setData(result.data.products)
                console.log(result)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <Navigation />
            <h1>Sample Get Data</h1>
            
            <table>
                <tr>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Action</th>
                </tr>
                {
                    data.map((el, index) => {
                        return (
                            <tr>
                                <td>
                                    {el.title}
                                </td>
                                <td>
                                    {el.price}
                                </td>
                                <td>
                                    {el.discountPercentage}
                                </td>
                                <td>
                                    <button onClick={() => console.log}>Action</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}





export default GetData