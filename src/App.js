import './App.css';
import React,{useEffect,useState} from 'react'

function App() {
  const [users,setUsers]=useState([])
  useEffect(()=>{
    getList()
  },[])
  console.log(users);
  function getList()
  {
    fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
      result.json().then((resp)=>{
        // console.warn("result",resp);
        setUsers(resp)
      })
    })
  }
  function deleteUser(id)
  {
    fetch(`https://jsonplaceholder.typicode.com/users${id}`,{
      method:'DELETE'
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp);
        getList()
      })
    })
  }
  return(
    <div className="App">
      <h1>Get API Call</h1>
      <table border="1">
        <tbody>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
          {
            users.map((item,i)=>
            <tr key={i}>
              <td>{users[i].id}</td>
              <td>{users[i].name}</td>
              <td>{users[i].username}</td>
              <td>{users[i].email}</td>
              <td>{users[i].phone}</td>
              <td><button onClick={()=>deleteUser(item.id)}>Delete</button></td>
            </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}


export default App;
