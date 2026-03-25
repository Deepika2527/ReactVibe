import React from 'react'
import StandardP from './props/standardprops/StandardP'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Dparent from './props/destructuringprops/Dparent.jsx'

function App() {
  return (
    <div>
      <h1>Props day 1....</h1>

      <hr />
      <StandardP/>

      <hr />
      <Dparent/>
    </div>
  )
}

export default App