import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import Navigation from './Navigation';


const dataObject = {
  id: 1,
  nama: 'Inu',
  alamat: 'Pramuka',
  ruang: 3,
  nilai: 10
}

const dataList = [
  {
    id: 1,
    nama: 'Inu',
    ruang: 3
  },
  {
    id: 1,
    nama: "Fahrul",
    ruang: 11
  },

]


const Home = () => {
  const [dataObj, setDataObj] = useState(dataList)

  
  const addData = () => {
    console.log('re')
    setDataObj({
      ...dataObj,
      id: 9,
      nama: "sandi",
      ruang: 19
    })
  }

  return (
    <div>
      <Navigation />
      <h1>Home</h1>
      <h1>Halo, {dataObject.nama}</h1>
      <h2>Ruang, {dataObject.ruang}</h2>
      <h2>Ruang + nilai: {Number(dataObject.nilai) + dataObject.ruang}</h2>
      <h1>Mengambil 1 data dari list</h1>
      <h2>{dataList[1].nama}</h2>
      <h1>Looping Data</h1>
      {
        dataObj.map((el, index) => {
          return (
            <div key={el.id}>
              <h4>ID: {el.nama}</h4>
              <h4>RUANG: {el.ruang}</h4>
              <button onClick={() =>
                setDataObj({
                  ...dataObj,
                  nama_adik: el.nama,
                })
              }>Lihat Data

              </button>
              <h1>tambah data hook</h1>
              <button onClick={() => addData()}></button>
              <pre>
                {/* {JSON.stringify(dataObj, null, 3)} */}
              </pre>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home;
