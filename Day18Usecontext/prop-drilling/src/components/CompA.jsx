import React from 'react'
import CompB from './CompB'

function CompA() {
    let name = "Recat Js"
  return (
    <div>
        <h1>This is component A</h1>
        <CompB name= {name}/>
    </div>
  )
}

export default CompA