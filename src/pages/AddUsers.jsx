import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Style1.css'

const AddUsers = () => {
    let [values,setValues]=useState({username:"",email:""})
    let navigate=useNavigate();
    let change=(e)=>{
        setValues({...values,[e.target.name]:[e.target.value]})
    }
   function addUser(e){
        e.preventDefault();
        axios.post("http://localhost:2030/users",values)
            .then(()=>
                navigate('/')
            )
    }
  return (
    <div>
     <h1>Add new Users</h1> 
     <form action="">
        <input type="text" placeholder='enter username' name="username" value={values.username}
        onChange={change} />
        <br />
        <input type="text" placeholder='enter email' name="email" value={values.email} 
        onChange={change}/>
        <br />
        <button onClick={addUser}>Add user</button>
     </form>
    </div>
    
  )
}

export default AddUsers
