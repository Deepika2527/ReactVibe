import React, { useState } from 'react'

function FunctionC() {
    let [count,setcount] = useState(0)
    console.log(count)

    function Incr(){
        setcount(count+1)
        
    }
    function Decr(){
        setcount(count-1)
    }
    
  return (
    <div>
      <center>
          <h1>This is Function component-counter app</h1>
          <h2>Counter : {count} </h2>

          {/* <button className="btn btn-primary m-2" onClick={()=>setcount(count+1)}>Inc</button>
          <button className="btn btn-warning m-2" onClick={()=>setcount(count-1)}>Dec</button> */}

          <hr />
          <h2>Counter: {count}</h2>
          <button className="btn btn-info m-2" onClick={Incr}>Increment</button>
          <button className="btn btn-info m-2" onClick={Decr}>Decrement</button>


      </center>
    </div>
  )
}

export default FunctionC