import React from 'react'

function Ifels() {
  const isLogged = false

  if(isLogged){
    return <h1 style={{color:'pink',background:"lightyellow",textAlign:"center"}}>Welcome Admin 😎 </h1>
  }
  else{
    return <h2 style={{color:"red",background:"lightblue"}}>Sorry Invalid User❌</h2>
  }
}

export default Ifels