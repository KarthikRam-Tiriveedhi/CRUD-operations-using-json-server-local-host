import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Style1.css'
const GitUsers = () => {
    let [state,setState]=useState([])
    let [thead,setThead]=useState([])
    let Navigate=useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:2030/users").then(res=>{
            setState(res.data);
            setThead(Object.keys(res.data[0]).slice(0,4)) 
        })
        .catch(error=>console.error("error fetching data:",error));
    },[]);
    function dele(id)
    {
         axios.delete("http://localhost:2030/users/"+id)
        // axios.delete(`http://localhost:4040/${id}`)
        .then(() => {
         Navigate("/");
             },[state])
    }
  return (
    <table border={2}>
        <caption>
            <strong>Crud Operations</strong>
            <button onClick={()=>Navigate('/add')}>Add+⭐</button>
        </caption>
        <thead>
          <tr>{thead.map((x,y)=><th key={y} >{x}</th>)}
          <th>operations</th>
          </tr>
        </thead>
        <tbody>
            {state.map(k=>{
                return(
                    <tr key={k.id}>
                        <td>{k.id}</td>
                        <td>{k.name}</td>
                        <td>{k.username}</td>
                        <td>{k.email}</td>
                        <td><Link to={`/edit/${k.id}`}><button>edit👍</button> </Link>
                        <button onClick={()=>dele(k.id)}>delete👎</button></td>
                    </tr>
                     )
            })}
        </tbody>
    </table>
  )
}

export default GitUsers


// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const GitUsers = () => {
//     const [state, setState] = useState([])
//     const [thead, setThead] = useState([])
//     const navigate = useNavigate()

//     useEffect(() => {
//         // Fetch the data and update state
//         axios.get("http://localhost:4040/0")
//             .then(res => {
//                 setState(res.data);
//                 if (res.data.length > 0) {
//                     setThead(Object.keys(res.data[0]).slice(0, 4)) // Ensure that thead only contains the first 4 columns
//                 }
//             })
//             .catch(err => {
//                 console.error("Error fetching data", err); // Error handling
//             });
//     }, [])

//     const handleDelete = (id) => {
//         // Delete the user by id
//         axios.delete(`http://localhost:4040/${id}`)
//             .then(() => {
//                 // Instead of navigating, refresh the state by refetching the data
//                 setState(state.filter(user => user.id !== id)) // Remove the deleted item from state
//             })
//             .catch(err => {
//                 console.error("Error deleting user", err); // Error handling
//             });
//     }

//     return (
//         <table border={2}>
//             <caption>
//                 <strong>Crud Operations</strong>
//                 <button onClick={() => navigate('/add')}>Add+</button>
//             </caption>
//             <thead>
//                 <tr>
//                     {thead.map((x, y) => <th key={y}>{x}</th>)}
//                     <th>Operations</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {state.map(k => (
//                     <tr key={k.id}>
//                         <td>{k.id}</td>
//                         <td>{k.name}</td>
//                         <td>{k.username}</td>
//                         <td>{k.email}</td>
//                         <td>
//                             <button onClick={() => navigate(`/edit/${k.id}`)}>Edit</button> {/* Add edit functionality */}
//                             <button onClick={() => handleDelete(k.id)}>Delete</button>
//                         </td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     )
// }
// export default GitUsers

