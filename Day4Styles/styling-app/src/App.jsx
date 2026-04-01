import React from 'react'
import Inline from './styles/inline/Inline'
import External from './styles/external/External'
import Internal from './styles/intrenal/Internal'
import CompA from '../src/modules/CompA'
import CompB from './modules/CompB'

function App() {
  
  return (
    <div>
      <h1 >Css Stylings.....</h1>
       {/* <External/>
      <Inline/>
      <hr />
      <External/> */}
      <hr />
      {/* <Internal/> */}
      <hr />
      <CompA/>
      <CompB/>
      
    </div>
  )
}

export default App
