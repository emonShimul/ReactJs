import './App.css';
import React, { useEffect, useState } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [id, setId] = useState(null)

  useEffect(() => {
    getList()
  }, [])
  // console.log(users);
  function getList() {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp) => {
        // console.warn("result",resp);
        setUsers(resp)
        setName(resp[0].name)
        setUsername(resp[0].username)
        setEmail(resp[0].email)
        setPhone(resp[0].phone)
        setId(resp[0].id)
      })
    })
  }
  function deleteUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/users${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getList()
      })
    })
  }

  function selectUser(id) {
    // console.warn(users[id-1]);
    let item = users[id - 1];
    setName(item.name);
    setUsername(item.username);
    setEmail(item.email);
    setPhone(item.phone);
    setId(item.id);
  }

  function updateUser() {
    console.warn(name, username, email, phone, id);
    let item = { name, username, email, phone, id }
    fetch(`https://jsonplaceholder.typicode.com/users${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getList()
      })
    })
  }
  return (
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
            users.map((item, i) =>
              <tr key={i}>
                <td>{users[i].id}</td>
                <td>{users[i].name}</td>
                <td>{users[i].username}</td>
                <td>{users[i].email}</td>
                <td>{users[i].phone}</td>
                <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>
                <td><button onClick={() => selectUser(item.id)}>Update</button></td>
              </tr>
            )
          }
        </tbody>
      </table>

      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br /> <br />
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /> <br /> <br />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} /> <br /> <br />
        <button onClick={updateUser}>Update User</button>
      </div>
    </div>

  );
}


export default App;
