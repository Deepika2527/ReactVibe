import React from 'react'
import Ifels from './components/Ifels'
import Ternry from './components/Ternry'
import Switchc from './components/Switchc'
import Shortc from './components/Shortc'

function App() {
  return (
    <div>
      <p>IfElse</p>
      <Ifels/>
      <hr />
      <p>Ternary Opertaor</p>
      <Ternry/>
      <hr/>
      <p>Switch Case</p>
      <Switchc/>
      <hr />

      <p>Short circuit</p>
      <Shortc/>

    </div>
  )
}

export default App