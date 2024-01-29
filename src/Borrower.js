import React, { useState } from 'react'

const Borrower = ({items,setitems}) => {

    var [dt,setdt]=useState([]);

    function adddata()
    {
        let id1
    if(items.length==0)
    {
      id1=1
    }
    else
    {
      id1=items[items.length-1].id+1
    }
    const addw={
      id:id1,
      mail:document.getElementById("mailtxt").value,
      data:document.getElementById("datatxt").value,
      status:"data inserted"
    }
    document.getElementById("mailtxt").value=""
    document.getElementById("datatxt").value=""
    const arr1=[...items]
    arr1.push(addw)
    setitems(arr1)
    console.log(arr1)

    var md=document.getElementById("mailtxt").value;

    dt=items.filter((user)=>
    {
      if(user.mail==md)
        return user;
    })

    setdt(dt);
    }


    
  const lt=dt.map((item)=>
  {
    return(
      <li key={item.id} style={{paddingBottom:20}}>
        <label>{item.data}</label>
        <br/>
        <label>{item.status}</label>
      </li>
    )
  })

  return (
    <div id="css1">
        <input type="text" id="mailtxt" placeholder='mailid'  size={27}/>
        <input type="text" id="datatxt" placeholder='data' size={27} /> 
        
        <br/>
        <br/>
        <button onClick={adddata}>ADD</button>

        <br/>
        <br/>

        <h2 style={{color:'blue'}}>DASHBOARD</h2>
        <div id="dashboard" style={{color:'blue'}}>
            {lt}
            
        </div>
    </div>
  )
}

export default Borrower