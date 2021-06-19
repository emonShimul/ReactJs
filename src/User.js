
import React, {useEffect,useRef} from 'react'

function User(props)
{
  const lastVal = useRef();
  useEffect(()=>{
    lastVal.current=props.count;
  })
  const prevProps = lastVal.current
  return(
    <div>
      <h1>Current val {props.count}</h1>
      <h2>Previous val {prevProps}</h2>
      <h3>Diff  {props.count-prevProps}</h3>
    </div>
  )
}

export default User;