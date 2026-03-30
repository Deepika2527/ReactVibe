import React from 'react'
import CompB from './CompB'

function CompA() {
    const greet = "React"
  return (
    <div>
        <h1>This is CompA-GrandParent</h1>
        <CompB greet = {greet}/>
        
    </div>
  )
}


export default CompA