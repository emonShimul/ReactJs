import './App.css';
import React,{useState} from 'react'

function App() {
  const[data, setData] = React.useState({name:'Emon',age:28});
  return(
    <div className="App">
      <h1>State Object with Hooks</h1>
      <input type="text" placeholder="Enter Name:" value={data.name}
       onChange={(e)=>{setData({...data,name:e.target.value})}} />
      <input type="text" placeholder="Enter Age:" value={data.age}
       onChange={(e)=>{setData({...data,age:e.target.value})}} />
      <h1>{data.name}</h1>
      <h1>{data.age}</h1>
    </div>
  );
}


export default App;
