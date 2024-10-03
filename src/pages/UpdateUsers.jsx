import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import './Style1.css'


const UpdateUsers = () => {
    let [values,setValues]=useState({username:"",email:""})
    let navigate=useNavigate();
    let change=(e)=>{
        setValues({...values,[e.target.name]:[e.target.value]})
    };
    let {id}=useParams()

    useEffect(()=>{
        axios.get("http://localhost:2030/users/"+id).then(res=>setValues(res.data))
        .catch(error=>console.error("error fetching data:",error));
    },[])
    function Update(e){
        e.preventDefault()
        axios.put("http://localhost:2030/users/"+id,values).then(()=>
        {
            navigate("/")
            .catch(error=>console.error("error fetching data:",error));
        },[])
    }
//    function addUser(e){
//         e.preventDefault();
//         axios.post("http://localhost:2030/users",values)
//             .then(()=>
//                 navigate('/')
//             )
//     }
  return (
    <div>
     <h3>Edit your profile</h3> 
     <form action="">
        <input type="text" placeholder='enter username' name="username" value={values.username}
        onChange={change} />
        <br />
        <input type="text" placeholder='enter email' name="email" value={values.email} 
        onChange={change}/>
        <br />
        <input type="text" placeholder='enter name' name="name" value={values.name} 
        onChange={change}/>
        <br />
        <button onClick={Update}>update User</button>
     </form>
    </div>
    
  )
}

export default UpdateUsers

