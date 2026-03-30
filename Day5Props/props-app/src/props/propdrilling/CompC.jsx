import React from 'react'

function CompC(prop) {
  return (
    <div>
        <h1>This is Comp C- Child</h1>
        <h1>Hello all, welcome to my session - {prop.greet}</h1>
    </div>
  )
}

export default CompC