import React from "react";


const Child =React.memo(({onClick}) =>{
    console.log("Child Component Rendering");
    
    return(
        <>
        <h2>Child Component</h2>
        <button className="btn btn-secondary" onClick={onClick}>Child</button>
        </>
    )
});

export default Child