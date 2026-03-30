import React from 'react'
import ChildC from './ChildC'

function ParentC() {
    function parentM(mgz){
        alert("Im going as  a prop:"+mgz)
    }
  return (
    <div>
        <h1>This is callback Parent</h1>
        <ChildC sendData = {parentM}/>
    </div>
  )
}

export default ParentC