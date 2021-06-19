import './App.css';
import React,{useEffect,useState} from 'react'

function App() {
  const [users,setUsers]=useState([])
  const [name,setName]=useState("")
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
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
        setName(resp[0].name)
        setUsername(resp[0].username)
        setEmail(resp[0].email)
        setPhone(resp[0].phone)
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

  function selectUser(id)
  {
    console.warn(users[id-1]);
    let item = users[id-1];
    setName(item.name);
    setUsername(item.username);
    setEmail(item.email);
    setPhone(item.phone);
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
              <td><button onClick={()=>selectUser(item.id)}>Update</button></td>
            </tr>
            )
          }
        </tbody>
      </table>

      <div>
          <input type="text" value={name}/> <br/> <br/>
          <input type="text" value={username}/> <br/> <br/>
          <input type="text" value={email}/> <br/> <br/>
          <input type="text" value={phone}/> <br/> <br/>
          <button>Update User</button>
        </div>
    </div>
    
  );
}


export default App;
