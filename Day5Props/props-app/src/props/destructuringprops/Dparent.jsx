import React from 'react'
import Dchild from './Dchild'

function Dparent() {
 const   salary = 90000
  return (
    <div>
        <h1>This is Destructuring Parent Comp</h1>
        <Dchild name= {"Anu"} role = {"Developer"} sal = {salary}/>
    </div>
  )
}

export default Dparent