import React from 'react'

function Shortc() {
    const isPrepared = false
    const gotJob = true
  return (
    <div>
        {!isPrepared && <h1>We can process his resume</h1>}
        {gotJob && <h2>True</h2>}
        
    </div>
  )
}

export default Shortc