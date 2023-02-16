import Navigation from "./Navigation";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

function Product() {
    const [data, setData] = useState([])
    const [show, setShow] = useState(false)
  
    const [dataDetail, setDataDetail] = useState({})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    useEffect(() => {
        fetchData()
    }, [])

    const ModalProduct = () => {
        console.log(`dataDetail`, dataDetail)
        return (
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{dataDetail.Title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Carousel fade>
                            <Carousel.Item>
                                <div className='mh-10'>
                                    <img width={'300px'} src={dataDetail.thumbnail} />
                                        {dataDetail.description}
                                    </div>
                            </Carousel.Item>
                        </Carousel>    
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

    const ProductCart = (value) => {
        console.log(value.value)
        const item = value.value
        return (

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.thumbnail} />
                <Card.Body>
                    <Card.Title>{item.brand}</Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <Button
                        disabled={item.stok <= 50}
                        onClick={()=> {
                            setDataDetail(item)
                            handleShow()
                        }}
                        variant="primary">Buy</Button>
                </Card.Body>
            </Card>

        )
    }

    return (
        <div>
            <Navigation />
            <ModalProduct />
            <h1>Products</h1>
            <Row>
                {
                    data.map((el, index) => {
                        return (
                            <Col>
                                <ProductCart value={el} />
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}





export default Product