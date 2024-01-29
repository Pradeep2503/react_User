
import './App.css';
import Sign from './Sign';
import Login from "./Login";
import Admin from './Admin';
import Borrower from './Borrower';
import Lender from './Lender';
import React from 'react'
import { Route,Routes,Link } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [Users,setUsers]=useState([
    {
    mail:"hi@gmail.com",
    password:"123",
    type:"Borrower"
    },
    {
    mail:"him@gmail.com",
    password:"123",
    type:"Lender"
    },
])

  const [items,setitems]=useState([
    {
      id:1,
      mail:"hi@gmail.com",
      data:"data 1",
      status:"data inserted"
    },
    {
      id:2,
      mail:"him@gmail.com",
      data:"data 2",
      status:"data inserted"
    }

  ])

  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<Login Users={Users}/>} />
        <Route path="/Admin" element={<Admin items={items} setitems={setitems}/>} />
        <Route path="/Borrower" element={<Borrower items={items} setitems={setitems}/>} />
        <Route path="/Lender" element={<Lender items={items} setitems={setitems}/>} />
        <Route path="/Sign" element={<Sign Users={Users} setUsers={setUsers}/>} />
      </Routes>
    </div>
    </>
  );
}


export default App;
