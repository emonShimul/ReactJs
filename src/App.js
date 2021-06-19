import './App.css';
import React,{useEffect,useState} from 'react'

function App() {
  const [count, setCount] = useState(1)
  function updateCounter()
  {
    // let rand = Math.floor(Math.random()*10);
    // setCount((pre)=>{
    //   console.warn(pre);
    //   if(pre<5){
    //     alert("low value")
    //   }
    //   return rand;
    // });

    for (let i = 0; i < 5; i++) {
      // setCount(count+1)

      // setCount((pre)=>
      // {
      //   return pre+1
      // })
      
      setCount((pre)=>pre+1)       
      
    }
  }
  return(
    <div className="App">
      <h1>{count}</h1>
      <button onClick={updateCounter}>Click Me to Update Counter</button>
    </div>
    
  );
}


export default App;
