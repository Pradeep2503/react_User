import React, { useState } from 'react'
import { Route,Routes,Link } from 'react-router-dom';
import Sign from './Sign';


const Login = ({Users}) => {

  const [a,seta]=useState("");

  function check()
  {
    var checkmail=document.getElementById("maillogin").value;
    var checkpassword=document.getElementById("passwordlogin").value;
    const get=Users.filter((user)=>
    {
      if(user.mail==checkmail && user.password==checkpassword)
        return user;
    })

    console.log(get.length);

    if(get.length==0)
    {
      alert("CREATE AN ACCOUNT");
    }
    else
    {
      alert("CLICK LOGIN");
      seta(get[0].type);
    }
  }

  return (
    <>
    <div id="css">
        <input type="text" id="maillogin" placeholder='MAIL ID' size={25} />
        <br />
        <input type="text" id="passwordlogin" placeholder='PASSWORD' size={25}/>
        <br/>
        <br />
        <button onClick={check}>SUBMIT</button>
        <h3> <Link to={a}> LOGIN </Link> </h3>
        <h3> <Link to="/Sign"> CREATE AN ACCOUNT </Link> </h3>
    </div>
    </>
  )
}

export default Login;