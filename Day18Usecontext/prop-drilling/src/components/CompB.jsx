import React from 'react'
import CompC from './CompC'

function CompB({name}) {
  return (
    <div>
        <h1>This is Component B</h1>
        <CompC name={name}/>
    </div>
  )
}

export default CompB