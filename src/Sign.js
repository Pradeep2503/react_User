import React from 'react'
import { Route,Routes,Link } from 'react-router-dom';
import Login from './Login';
import { useState } from 'react';

const Sign = ({Users,setUsers}) => {


function adduser()
{
    var a=document.getElementById("mail").value;
    var b=document.getElementById("password").value;
    var c=document.getElementById("type").value;
    var obj={
        mail:a,
        password:b,
        type:c
    }
    Users.push(obj);
    setUsers(Users);
    console.log(Users);
    document.getElementById("mail").value="";
    document.getElementById("password").value="";
    document.getElementById("type").value="";

    alert("Click GO TO LOGIN");
}

  return (
    <div id="css">
    <input id="mail"type="text" placeholder='MAIL ID' size={27} />
        <br />
        <input id="password"type="text" placeholder='PASSWORD' size={27}/>
        <br/>
        <input id="type" type="text" placeholder='ADMIN / BORROWER / LENDER' size={27}/>
        <br />
        <br/>
        <button onClick={adduser}>SUBMIT</button>
        <h3> <Link to="/"> GO TO LOGIN </Link> </h3>
    </div>
  )
}

export default Sign