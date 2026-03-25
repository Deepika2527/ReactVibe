import React from 'react'

function Dchild({name,role,sal}) {
  return (
    <div>
        <h1>This is Child Destructing component</h1>
        <h2>Name : {name}</h2>
        <h3>Role : {role}</h3>
        <h4>Salary : {sal}</h4>
    </div>
  )
}

export default Dchild