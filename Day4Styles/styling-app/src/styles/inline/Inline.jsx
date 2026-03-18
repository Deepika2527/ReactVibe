import React from 'react'

function Inline() {
    const newPara={
    color : "yellow",
    border : "3px solid green",
    backgroundColor: "lightgrey"
  }
  return (
    <div>
        <p style={{color:'red',fontSize:'40px',textAlign:"center"}}>This is Para</p>
        <p style={newPara}>This is testing para</p>
    </div>
  )
}

export default Inline