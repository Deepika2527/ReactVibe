import React, { useReducer } from 'react'

function LearnReducer() {
    let [count,dispatch] = useReducer(reducerFun,0)
    function reducerFun(currentState,action){
        console.log(currentState);
        console.log(action);
        switch(action.type){
            case "INCREMENT":
                return currentState + action.payload;
            case "DECREMENT":
                return currentState - action.payload
        }
        
        

    }
  return (
   <div className="container mt-5 p-3 bg-light">
    <h1>Count : {count}</h1>
    <button className="btn btn-primary mt-4 mx-5"
    onClick={()=>dispatch({type:"INCREMENT",payload:10})}>Inc</button>
    <button className="btn btn-warning mt-4 mx-5" 
    onClick={()=>dispatch({type:"DECREMENT",payload:5})}>Dec</button>
   </div>
  )
}

export default LearnReducer