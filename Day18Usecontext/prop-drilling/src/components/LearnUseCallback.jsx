import { useCallback, useState } from "react"
import Child from "./Child";

const LearnUseCallback=() =>{
    const[count,setCount]= useState(0)


    // function childRender(){
    //     console.log('Rendering');
        

    // }
    const childRender =useCallback(()=>{
        console.log('Rendering');
        
    },[])


    return(
       <div className="container mt-4 bg-dark text-light text-center">
        <h1>Use call back</h1>
        <h2>Count: {count}</h2>
        <button className="btn btn-warning my-2" onClick={()=>setCount(p=>p+1)}>Add</button>
        <Child onClick={childRender}/>





       </div>
    )
}

export default LearnUseCallback