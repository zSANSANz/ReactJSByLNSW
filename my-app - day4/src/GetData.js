import Navigation from "./Navigation";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import './App.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function GetData() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
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
const deleteData = (id) => {
    setIsLoading(true)
    axios.delete(`https:/dummyjson.com/products/${id}`)
    .then((result) => {
        fetchData()
        setIsLoading(false)
        console.log('Data diHapus')})
    .catch((e) => {
        console.log('error', e)
    })
}
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <Navigation />
            <h1>Sample Get Data</h1>
            
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    data.map((el, index) => {
                        return (
                            <tbody>
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
                                        <button onClick={() => 
                                            deleteData(el.id)
                                        }>Delete</button>
                                        <Button variant="primary">Primary</Button>{' '}
                                        <Button key={el.id}
                                            variant="danger"
                                            onClick={() => 
                                            deleteData(el.id)
                                        }>{isLoading? 'Loading...': "Delete"}</Button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </Table>
        </div>
    )
}





export default GetData