import React from 'react'
import CompC from './CompC'

function CompB(prop) {
  return (
    <div>
        <h1>This is Comp B- Parent</h1>
        
        <CompC greet={prop.greet}/>
       
    </div>
  )
}

export default CompB